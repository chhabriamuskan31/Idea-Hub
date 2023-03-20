CREATE SCHEMA blog;

CREATE TABLE blog.categories
(
	CategoryID int IDENTITY(1,1) primary key, /*Autoincrement*/
	name varchar(500),
	CreateAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
	ActiveYN int DEFAULT 1 /* we keep it as bit tiny int or int*/  
)

create table users ( 
	UserID int IDENTITY(1,1) primary key,
	FirstName varchar(500),
	LastName varchar(500),
	UserName varchar(500),
	Email varchar(500),
	Password nvarchar(max),
	Bio nvarchar(max),
	Mobile varchar(50),
	CreateAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
	ActiveYN int DEFAULT 1,	 
)


--DELETE from dbo.users where UserID = 3;

--ALTER TABLE dbo.users ADD CONSTRAINT uc_Email UNIQUE(Email);

--ALTER TABLE dbo.users ADD ResetPasswordToken nvarchar(max);
--ALTER TABLE dbo.users ADD ResetTimeToExpire DATETIME;


select * from dbo.users;

-- Reset password token or time to expire.


--UPDATE dbo.users set Email = NEWID();

--EXEC sp_RENAME 'users.Mobile2','Mobile'
--EXEC sp_RENAME 'users.Bio2','Bio'

--ALTER TABLE dbo.users ALTER COLUMN Mobile varchar(50)
--ALTER TABLE dbo.users ALTER COLUMN Bio nvarchar(max)

create table blog.posts(
	PostID int IDENTITY(1,1) primary key,
	AuthorID int Foreign key references dbo.users(UserID),
	Title varchar(300),
	CategoryID int Foreign key references blog.categories(CategoryID),
	ShortDescription varchar(1000),
	Description nvarchar(max),
	Slug varchar(100) unique,
	ScheduledYN bit,
	NumberLikes int,
	NumberComments int,
	PublishedAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
	ActiveYN int DEFAULT 1

)

--ALTER TABLE blog.posts ADD FileName varchar(1000);

--insert into blog.posts values(2,1,'post2',1,'shhoorrtt','describe','slug',1,0,1,'2022-12-18 14:01:00:940','2022-12-18 01:14:00:940');
select * from blog.posts;


CREATE TABLE blog.tags(
	TagID int IDENTITY(1,1) primary key,
	TagName varchar(500),
	CreatedAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
	ActiveYN int DEFAULT 1,
)
select * from blog.tags;

CREATE TABLE blog.post_tag(
	ID int IDENTITY(1,1) primary key,
	PostID int foreign key references blog.posts(PostID),
	TagID int foreign key references blog.tags(TagID)

)
select * from blog.post_tag;
CREATE TABLE blog.comments
(
	CommentID int IDENTITY(1,1) primary key,
	Comment nvarchar(max),
	NumberLikes int,
	UserID int foreign key references dbo.users(UserID),
	PostID int foreign key references blog.posts(PostID),
	CreatedAt DATETIME DEFAULT GETDATE()
)

CREATE TABLE blog.post_likes(
    ID int IDENTITY(1,1) primary key,
    UserID int foreign key references dbo.users(UserID),
    PostID int foreign key references blog.posts(PostID),
)

CREATE TABLE blog.comment_likes(
    ID int IDENTITY(1,1) primary key,
    UserID int foreign key references dbo.users(UserID),
    CommentID int foreign key references blog.comments(CommentID),
)

CREATE TABLE blog.favourites(
    ID int IDENTITY(1,1) primary key,
    UserID int foreign key references dbo.users(UserID),
    PostID int foreign key references blog.posts(PostID),
)





