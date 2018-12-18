# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}
  before_validation :ensure_session_token!

  attr_reader :password
  
  has_many :team_memberships, 
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :TeamMembership

  has_many :teams, 
    through: :team_memberships,
    source: :team

  has_many :projects,
    through: :teams,
    source: :projects
  
  has_many :created_tasks,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :Task

  has_many :assigned_tasks,
    primary_key: :id,
    foreign_key: :assignee_id,
    class_name: :Task

  has_many :team_tasks, 
    through: :projects, 
    source: :tasks
  
  def ensure_session_token!
    self.session_token ||= SecureRandom.urlsafe_base64
  end 
  
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save! 
    self.session_token
  end 
  
  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end 
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 
  
  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    
    if @user && @user.is_password?(password) 
      @user 
    else 
      nil
    end 
  end 

  def initials 
    if (!self.fname) || (!self.lname)
      return "ME"
    else 
      return self.fname[0].upcase + self.lname[0].upcase
    end 
  end 
end
