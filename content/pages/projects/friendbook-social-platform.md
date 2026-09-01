---
type: ProjectLayout
title: FriendBook Social Platform
colors: colors-a
date: '2026-08-26'
client: Personal full-stack project
description: >-
  A MERN-based social platform with secure authentication, rich-text publishing, social relationships, likes, and personalized follower feeds.
featuredImage: { type: ImageBlock, url: /images/bg4.jpg, altText: Abstract visualization of an interconnected social platform }
media: { type: ImageBlock, url: /images/bg4.jpg, altText: Abstract visualization of social connections and content }
---

## The challenge

A useful social application must coordinate authentication, content ownership, user relationships, and personalized feeds across the frontend, API, and database. Follow and like operations must remain consistent for every affected user while the interface responds immediately to changes.

## What I built

I developed FriendBook as a full-stack social platform using Next.js and React on the client, with Express, Node.js, MongoDB, and Mongoose on the server. Users can register and sign in, create and manage rich-text posts, follow or unfollow people, like or unlike posts, and filter their timeline to content from followed accounts.

The implementation uses JWT-protected routes, bcrypt password hashing, MongoDB references, and atomic `$addToSet` and `$pull` operations. React Context and local storage coordinate authentication and feed state between the user interface and API.

## Engineering focus

* Full-stack JavaScript architecture with separate client and server layers
* JWT authentication and secure password hashing
* Bidirectional follower and following relationships
* Personalized news-feed queries
* Reusable React components and responsive UI patterns
* MongoDB user and post data models

## Technology stack

Next.js, React, Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Axios, Ant Design, Bootstrap, React Quill, and React Toastify.

## Next steps

Production hardening would include HTTP-only cookie authentication, richer authorization checks, HTML sanitization, transactional relationship updates, validation, pagination, automated testing, CI/CD, comments, password recovery, and friend requests.

[View the FriendBook repository on GitHub](https://github.com/pvpavankumar/snow_IC4)
