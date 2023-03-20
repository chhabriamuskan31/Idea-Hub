USE [blog_stack]
GO

--userid or token lena hai or validate token ka sp bnana hai

/****** Object:  StoredProcedure [dbo].[validateUser]    Script Date: 05-02-2023 15:12:45 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER PROCEDURE [dbo].[validateToken]
@userID INT,
@token VARCHAR(1000)
--@timeToExpire DATETIME

AS
BEGIN 

DECLARE @count INT = 0

	SELECT @count = COUNT(1)
	FROM dbo.users
	WHERE UserID = @userID
	AND token = @token

	IF(@count>0)
	BEGIN
		SELECT 
		CASE WHEN timeToExpire > GETDATE()
		THEN 1
		ELSE 0
		End 
		AS validToken
		FROM dbo.users
		where token = @token
		UPDATE dbo.users
		SET timeToExpire = DATEADD(hh,1,GETDATE())
		WHERE token = @token
	END
	ELSE
	BEGIN
		SELECT 0 as validToken
	END
END 
GO
