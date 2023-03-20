USE [blog_stack]
GO
/****** Object:  StoredProcedure [dbo].[sp_validateUser]    Script Date: 25-02-2023 20:34:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[sp_validateUser]
@username varchar(50)
AS
BEGIN 

	DECLARE @count int
	SET @count=(SELECT count(1)
				FROM   dbo.users
				WHERE  UserName = @username )
     IF @count>=1
	  SELECT 1 as existsYN
	ELSE
	   SELECT 0 as existsYN
END 

