USE [blog_stack]
GO

CREATE PROCEDURE [dbo].[sp_updatePassword]
--DECLARE
	 @newPassword nvarchar(max),
     @token varchar(500)
AS
BEGIN
	UPDATE dbo.users
	SET Password=HASHBYTES('SHA2_256',@newPassword)
	WHERE ResetPasswordToken=@token and ResetTimeToExpire>GETDATE()
END
GO

SELECT * FROM dbo.users;