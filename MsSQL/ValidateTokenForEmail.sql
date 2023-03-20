USE [blog_stack]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[sp_validateToken]
--DECLARE
     @token varchar(500)
AS
BEGIN
	DECLARE @countUser int
	SET @countUser=(SELECT count(UserID)
	FROM [dbo].[users] 
	WHERE ResetPasswordToken=@token)
	IF @countUser>=1
		BEGIN
		  SELECT 1 as validYN
		END
	ELSE
		SELECT 0 as validYN
END
GO

SELECT * FROM dbo.users;
--DELETE FROM dbo.users where UserID= 1013;