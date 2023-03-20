-- =============================================

-- Create date: 12/11/2022
-- Description: Adds/registers users
--
-- only ' ' single quots are allowed and for single line comment -- and for multi line comment /* */
-- Parameters:
--   @firstName - first name
--   @lastName - last name
--   @userName - username 
--   @email - email 
--   @password - hashed password
--   @Mobile - phone number
--   @Bio - bio of user
     
-- Example: EXEC sp_registerUser 'Disha','Ramrakhyani','dish@ramr','disha@gmail.com','password','9999000090','demo bio test'
-- Change History:
--   5/15/17 Jack Brown: Changed calcualtion method( example change)
-- =============================================

ALTER PROCEDURE sp_registerUser
	@firstName varchar(500),
	@lastName varchar(500),
	@userName varchar(500),
	@email varchar(500),
	@password nvarchar(max),
	@Mobile varchar(50),
	@Bio nvarchar(max)
	
AS
BEGIN
	INSERT INTO [dbo].[users]
				([FirstName]
				,[LastName]
				,[UserName]
				,[Email]
				,[Password]
				,[Mobile]
				,[Bio])
		VALUES(@firstName,
				@lastName,
				@userName,
				@email,
				HASHBYTES('SHA2_512',CONVERT(nvarchar(max),@password)),
				@Mobile,
				@Bio)
END

EXEC sp_registerUser 'Muskan','Chhabria','muskii','muskan@gmail.com','muski','9999000090','demo bio test';

SELECT * FROM dbo.users

EXEC sp_loginUser 'muskii','muski'

CREATE PROCEDURE [dbo].[validateUser]
@username varchar(50)
AS
BEGIN 

IF EXISTS ( SELECT Username
                FROM   dbo.users
                WHERE  Username = @username )
    BEGIN
        RAISERROR ( 'UserName %s Already Exists.', -- Message text.
          16, -- Severity.
          1, -- State.
          @username
           );
    END
    ELSE
    BEGIN
        INSERT INTO dbo.users
          (Username)
        VALUES
          (@username)
     END

END 
GO


ALTER DATABASE [blog-stack]
SET COMPATIBILITY_LEVEL = 120


--ALTER TABLE dbo.users ADD token varchar(1000), timeToExpire datetime