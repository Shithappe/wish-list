# Backend API


## Quick Start/Installation
Make sure you have:
- Node.js
- MySql


## API Usage

### Auth 

Headers:
- Content-Type: application/json

|  Action | Method | Request | Requirements  | 
| --------| :----------: | :---------: | --------------- | 
| Login via email. | POST |  /api/login/register   | @email @password  |  
| Register via email.  | POST | /api/user/register  | @username @email @password  | 
------------

### Wishes 

Headers:
- 'Authorization': ```token```
- 'Content-Type': 'application/json'


| Action | Method | Request |Requirements  |  
|------------ | :------------: | :------------: | ------------ | 
| Get all wishes available to the user.  | GET |  /api/wish/  |   | 
| Update wish.  | PATCH | /api/wish/  | @id @name @link @price  | 
| Delete wish.  | DELETE | /api/wish/  | @id | 
| Get all available users to share wishes.  | GET  | /api/wish/users/  |   |
| Create wish.  | POST  | /api/wish/add  |  @name @link @price | 
| Share wish. | POST |  /api/wish/share/ |  @recipient_id  |
| Accept to view wishes other users.  |  PATCH | /api/wish/share/  | @accepted @sender_id  |
| Get all notification. | GET  |  /api/wish/notification |   |
| Cancel to view wishes other users. | DELETE | api/wish/notification | @id |

