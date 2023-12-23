<h1 align="center"> Appointments booking System</h1>​
​
<h2 align="center">Backend application for centre esthetics</h2>

## Table of contents

- Title project
- Project description
- Reverse Engineer
- How to use the application
- Technologies Used
- List endpoints
- Licence and copyright

### Project descriptión

The developed proposal aims at a backend web application to simulate the management of appointments in a beauty center, in which I have mainly used the tools node + express, mysql workbench, postman to generate different endpoints for the users who will enter the application. In this case we focus on the design of entity models to obtain a **users** table composed of the following properties: id, username, last name, email, password, phone number, address, role, status, where it has a one-to-many relationship with reviews.**appointments** with the properties id, user_Id, treatment_Id, name, status, date, time. **Treatments** with the properties id, review_Id, appointment_Id, treatment_name, description, treatment_duration, image_url, status. Relating one to many with reviews, many to many with quotes. **Review** with the properties id, user_Id, treatment_Id, ratings, feedback, status. In a many-to-one relationship with users, many-to-one with treatments

### Representation users relationship

> > @OneToMany(() => Reviews, (reviews) => review.user)
> > reviews!: Reviews[];

### Representation appointment relationship

> > @ManyToMany(() => Users)
> > @JoinTable({
> > name: "appointment"
> > })
> > user!: Users[];

### Representation treatment relationship

> > @ManyToOne(() => Appointment, (appointment)=>appointment.treatment)
> > @JoinColumn({name: "appointment_id"})
> > appointment!: Appointment [];

### Representation Review relationship

> > @ManyToOne(() => Treatment, (treatment)=>treatmet.review)
> > @JoinColumn({name: "treatment_id"})
> > treatment!: Treatment [];

### Reverse Engineer

![Diagram BBDD](./src/img/Entitys.JPG)

### how to use the application

- **install vscode extension Thunderclient or postman**
- **Install node**
- **install express**
- **install typeORM**
- **install dotenv**
- **install mysql workbench**
- run the command **npm run dev** in the terminal
  ​

### Technologies Used

​

<p align = "center" display= "flex">
  <tr >
    <td valign="top"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" width="60"></td>
    <td valign="top"><img src="https://cdn.worldvectorlogo.com/logos/postman.svg" width="60"></td>
    <td valign="top"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png" width="80"></td>
    <td valign="top"><img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png width="55"></td>
     <td valign="top"><img src="https://avatars.githubusercontent.com/u/20165699?v=4" width="60"></td>

### Endpoints

### users/register

> > POST http://localhost:4001/users/register
> > {
> > "status": "success",
> > "message": "user created success",
> > "users": {
> > name: 'Maria',
> > last_name: 'Ascanio',
> > phone_number: '123456789',
> > address: 'Denia',
> > email: 'maria.maria@gmail.com',
> > password: '123456789',
> > role: 'user',
> > status: 'active'
> > }
> > }

### users/login

> > POST http://localhost:4001/users/login
> > {
> > {
> > "success": true,
> > "message": "user logged succesfully",
> > "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjozNCwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhbGUuYWxlQGdtYWlsLmNvbSIsImlhdCI6MTcwMzMzMjEyNywiZXhwIjoxNzAzOTM2OTI3fQ.uhwoF_8e9a2k_F_AlxyDi1xt3l6J0zD4lGrBdDVGbLs",
> > "name": "Alejandra",
> > "role": "admin"
> > }
> > }

### users/profile

> > GET http://localhost:4001/users/profile
> > {
> > "success": true,
> > "message": "profile users retrieved", >>"data": {
> > "id": 34,
> > "name": "Alejandra",
> > "last_name": "Martinez",
> > "email": "ale.ale@gmail.com",
> > "password": "$2b$10$w0Y6kk1nJTXg9I/uhDDaPulWpKBpji2f9xjKMUN80MTbYgwX8HQES",
> > "phone_number": "123456789",
> > "address": "Zaragoza",
> > "role": "admin",
> > "status": "active",
> > "created_at": "2023-12-23T11:38:26.448Z",
> > "updated_at": "2023-12-23T11:38:26.448Z"
> > }
> > }

### appointment/create

> > POST http://localhost:4001/treatments/create
> > {
> > "status": "success",
> > "message": "Treatment create success",
> > "treatment": {
> > "name_treatment": "Spots and pigmentation",
> > "description": "Spots caused by the sun, age, acne and other causes. Depigmentant with biomimetic peptides and depigmenting acids and melanin inhibitors. Reduces or eliminates spots, lightens and evens skin tone..",
> > "duration_treatment": "6 sessión 2 hour",
> > "img_url": "https://bellasanamedspa.com/storage/services/March2022/MICRONEEDLING-3.jpg",
> > "status": "active",
> > "id": 26,
> > "created_at": "2023-12-23T08:50:29.110Z",
> > "updated_at": "2023-12-23T08:50:29.110Z"
> > }
> > }

### /appointment/appointment_update

> > PUT http://localhost:4000/appointment/appointment_update/5
> > {
> > "updateAppointment": {
> > "id": 5,
> > "date": "2023-10-10T22:00:00.000Z",
> > "sessions": "piercing",
> > "availability": false,
> > "time": "09:00",
> > "created_at": "2023-11-10T17:18:27.000Z",
> > "updated_at": "2023-11-10T17:45:43.000Z",
> > "customers_id": 2,
> > "tattooartist_id": 10
> > }
> > }

### appoinment/appointments_get_all

> > GET http://localhost:4000/appointment/appointments_get_tattoo
> > {
> > "id": 3,
> > "date": "2023-11-04T23:00:00.000Z",
> > "sessions": "tattoo",
> > "availability": false,
> > "time": "09:00",
> > "created_at": "2023-11-05T15:43:01.000Z",
> > "updated_at": "2023-11-08T17:45:33.000Z",
> > "customers_id": 4,
> > "tattooartist_id": 1
> > }

> > {
> > "id": 4,
> > "date": "2023-10-10T22:00:00.000Z",
> > "sessions": "piercing",
> > "availability": false,
> > "time": "12:00",
> > "created_at": "2023-11-10T17:17:11.000Z",
> > "updated_at": "2023-11-10T17:17:11.000Z",
> > "customers_id": 4,
> > "tattooartist_id": 10
> > },
> > {
> > "id": 5,
> > "date": "2023-10-10T22:00:00.000Z",
> > "sessions": "piercing",
> > "availability": false,
> > "time": "12:00",
> > "created_at": "2023-11-10T17:18:27.000Z",
> > "updated_at": "2023-11-10T17:18:27.000Z",
> > "customers_id": 2,
> > "tattooartist_id": 10
> > }

### appoinment/appointments_delete/5

> > DELETE http://localhost:4000/appointment/>>appointment_delete/5
> > {
> > "message": "Appointment delete success"
> > }

### Grateful

First of all to my colleagues who have contributed their opinions at opportune moments to make all the information seen in the classroom more fluid, to the existence of applications such as stack overflow, tutorials on the subject.  
​

### Licence and copyright

📝 The copyright belongs to me Meriyen Rodriguez, in this web application proposed by the Geekshubs academy as the first backend version to later give continuity to the fronend version.
