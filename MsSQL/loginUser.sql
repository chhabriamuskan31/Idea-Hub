USE [blog_stack]
GO
/****** Object:  StoredProcedure [dbo].[sp_loginUser]    Script Date: 25-02-2023 21:11:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[sp_loginUser] 
	@userName varchar(500),
	@password nvarchar(max)
AS
BEGIN

DECLARE @count INt = 0
	SELECT @count = COUNT(1)
	FROM dbo.users
	where UserName=@userName and Password=HASHBYTES('SHA2_512',@password)

	IF(@count > 0)
	BEGIN
		Update dbo.users
		SET token = NEWID(),
		timeToExpire = DATEADD(hh,1,GETDATE())
		where UserName=@userName and Password=HASHBYTES('SHA2_512',@password)

		SELECT TOP 1
		1 as valid,
		token,
		UserName,
		timeToExpire,
		UserID,
		CONCAT(FirstName,' ',LastName) as fullName
		FROM dbo.users
		WHERE UserName=@userName AND password=HASHBYTES('SHA2_512',@password)

	END
	ELSE
	BEGIN
	 SELECT 0 AS valid
	END
END