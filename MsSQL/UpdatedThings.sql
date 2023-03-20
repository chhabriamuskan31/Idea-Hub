USE [blog_stack]
GO

UPDATE [blog].[posts]
   SET  Description='<div>
        <strong>Description of the blog</strong>
        <i class="d-block">Rules</i>
        <ul>
            <li>Rule1</li>
            <li>Rule2</li>
            <li>Rule3</li>
            <li>Rule4</li>
            <li>Rule5</li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptatem tempore inventore qui <span style="color: red;">harum dolore voluptates cumque, amet commodi? Deserunt, veniam tempora sit, recusandae,</span> aliquid aut rerum neque beatae magni voluptatum provident est veritatis et. Excepturi vitae modi accusamus <i>rem magnam illum eius, qui dolor molestiae esse explicabo dolore! Impedit ex, nam corrupti molestiae veritatis accusamus hic illum distinctio iusto quod quisquam illo similique, a necessitatibus </i> atque magni dolore laudantium quasi? Ipsum dolore laborum ex dolorum natus cum illum, numquam, consequatur nostrum beatae molestiae accusantium magnam saepe obcaecati est minus velit? Sint officiis expedita doloremque nisi, adipisci illum dicta!</p>
    </div> '
 WHERE PostID = 1
GO


