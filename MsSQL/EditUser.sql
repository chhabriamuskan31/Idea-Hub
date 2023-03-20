
CREATE PROCEDURE sp_EditUser
	@userID int,
	@firstName varchar(500),
	@lastName varchar(500),
	@userName varchar(500),
	@email varchar(500),
	@password nvarchar(max),
	@Bio nvarchar(max),
	@Mobile varchar(50)
AS
BEGIN
		UPDATE dbo.users
		SET [FirstName] = @firstName
			,[LastName] = @lastName
			,[UserName] = @userName
			,[Email] = @email
			,[Password] = @password
			,[Mobile] = @Mobile
			,[Bio] = @Bio
			,[EditedAt] = GETDATE()
	WHERE [UserID] = @userID
END

EXEC sp_EditUser 1,'Disha','Ramrakhyani','ChangeUser','disha@gmail.com','password','9999000090','demo bio test';

