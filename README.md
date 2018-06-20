# CodingSearch

## **项目成员**

* 杨德杰 2016210405060  gitname:jerry 组长 
* 干臻原 2016210405067  gitname:toom1970
* 李伊宁 2016210405065  gitname:tyke1998

## **项目描述**
实现一个代码问题查询网站PC端，提供一个程序问题的多种解决方法。

## **界面设计**
1. 查询界面
    ![查询界面](mkimg/home.jpg)
   1. 可到达登陆界面
   2. 可到达社区主页
   3. 可到达查询界面
2. 登陆界面
    ![signin](mkimg/signin.jpg)
   1. 可到达用户界面
3. 用户界面
    ![user](mkimg/user.jpg)
   1. 个人信息，回答的问题，提出的问题
    ![publish](mkimg/publish.jpg)
   2. 提出问题功能
   3. 可到达社区界面
   4. 可到达查询界面

4. 社区界面
    ![com](mkimg/com.jpg)



## **数据结构**
'''
    user:
     name: { type: 'string' },
    password: { type: 'string' },
    avatar: { type: 'string' },
    gender: { type: 'string', enum: ['m', 'f', 'x'] },
    bio: { type: 'string' }
  });

  post:
   author: { type: Mongolass.Types.ObjectId },
    title: { type: 'string' },
    content: { type: 'string' },
    pv: { type: 'number' }

 comments:
     author: { type: Mongolass.Types.ObjectId },
    content: { type: 'string' },
    postId: { type: Mongolass.Types.ObjectId }
'''

## **功能模块**
1. 主页查询问题
2. 登陆用户问题解答
3. 社区主页最热问题
4. 待续...
