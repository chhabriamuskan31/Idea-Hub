USE [blog_stack]
GO
/****** Object:  StoredProcedure [dbo].[sp_validateEmail]    Script Date: 25-02-2023 20:04:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[sp_validateEmail]
--DECLARE
     @email varchar(500),
	 @token varchar(500)
AS
BEGIN
	DECLARE @countUser int
	SET @countUser=(SELECT count(UserID) FROM [dbo].[users] WHERE Email=@email AND ActiveYN=1)
	IF @countUser>=1
		BEGIN
		  SELECT 1 as validYN
		  UPDATE dbo.users 
		  SET ResetPasswordToken=@token 
		  WHERE Email=@email

		  UPDATE dbo.users
		  SET ResetTimeToExpire=DATEADD(hh,1,GETDATE()) 
		  WHERE Email=@email
		END
	ELSE
		SELECT 0 as validYN
END
