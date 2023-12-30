<h1 align="center"> Appointments booking System</h1>​
​
<h2 align="center">Backend for centre esthetics facial & body care</h2> <img scr="3.png" alt="log">

## Table of contents

- Title project
- Project description
- Reverse Engineer
- File sql database
- How to use the application
- Technologies Used
- Representation relationship
- Endpoints
- Link postman
- Licence and copyright

### Project descriptión

The developed proposal aims at a backend web application to simulate the management of appointments in a beauty center, in which I have mainly used the tools node + express, mysql workbench, postman to generate different endpoints for the users who will enter the application. In this case we focus on the design of entity models to obtain a **users** table composed of the following properties: id, username, last name, email, password, phone number, address, role, status, where it has a one-to-many relationship with reviews.**appointments** with the properties id, user_Id, treatment_Id, name, status, date, time. **Treatments** with the properties id, review_Id, appointment_Id, treatment_name, description, treatment_duration, image_url, status. Relating one to many with reviews, many to many with quotes. **Review** with the properties id, user_Id, treatment_Id, ratings, feedback, status. In a many-to-one relationship with users, many-to-one with treatments.

### Reverse Engineer

![Diagram BBDD](./src/img/Entitys.JPG)

### File Sql Database

![Link sql](./src/img/Sql/Dump20231230.sql)

### how to use the application

- **install vscode extension Thunderclient or postman**
- **Install node**
- **install express**
- **install typeORM**
- **install dotenv**
- **install mysql workbench**
- run the command **npm run dev** in the terminal

### Technologies used

<p align = "center" display= "flex">
  <tr >
    <td valign="top"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" width="60"></td>
    <td valign="top"><img src="https://cdn.worldvectorlogo.com/logos/postman.svg" width="60"></td>
    <td valign="top"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png" width="80"></td>
    <td valign="top"><img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png width="55"></td>
     <td valign="top"><img src="https://avatars.githubusercontent.com/u/20165699?v=4" width="60"></td>

### Representation users relationship

> > @OneToMany(() => Appointments, (appointment) => appointment.user)
> > appointments!: Appointments[];

> > @OneToMany(() => Reviews, (reviews) => review.user)
> > reviews!: Reviews[];

### Representation appointment relationship

> > @ManyToOne(() => Users, (user) => user.appointments)
> > user!: Users;

> > @ManyToMany(() => Treatments,(treatment: Treatments) => treatment.appointments)
> > treatments!: Treatments[];

### Representation treatment relationship

> > @ManyToMany(() => Appointments, (appointment) => appointment.treatments)
> > @JoinTable({
> > name: "appointment_treatments", // Nombre de la tabla de unión
> > joinColumn: {
> > name: "treatment_id",
> > referencedColumnName: "id",
> > },
> > inverseJoinColumn: {
> > name: "appointment_id",
> > referencedColumnName: "id",
> > },
> > })
> > appointments!: Appointments[];

> > @OneToMany(() => Reviews, (review) => review.treatment)
> > reviews!: Reviews[];

### Representation Review relationship

> > @ManyToOne(() => Users, (user) => user.reviews) //revisar no me trae el .review
> > user!: Users;

> > @ManyToOne(() => Treatments, (treatment) => treatment.reviews)
> > treatment!: Treatments; ​

### Endpoints

### Link Postman

[Colletions](https://documenter.getpostman.com/view/30593327/2s9YkuXcfX)

### Users

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

### users/update_profile

> > PUT http://localhost:4001/users/update_profile

> > {
> > "email": "meri.meri@gmail.com"
> > }

> > {
> > "success": true,
> > "message": "profile users retrieved",
> > "data": {
> > "id": 1,
> > "name": "meri",
> > "last_name": "rodriguez",
> > "email": "meri.meri@gmail.com",
> > "password": "$2b$10$RtDxGqS9uAXfx0kq5.dAiuXVLCQv90qL50llIuxazhxw04BFc1g.6",
> > "phone_number": "123456789",
> > "address": "valencia",
> > "role": "admin",
> > "status": "active",
> > "created_at": "2023-12-19T19:17:08.574Z",
> > "updated_at": "2023-12-19T19:17:08.574Z"
> > }
> > }

### Treatments

### treatment/create

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

### treatment/update

> > PUT http://localhost:4001/treatments/treatment_update/24
> > {
> > name_treatment: 'body saggin',
> > description: 'Application of hyaluronic acid, DMAE and organic illium to firm and tighten the skin when it begins to lose its tension and flexibility.',
> > duration_treatment: '6 sessión 1 hour',
> > img_url: 'https://i0.wp.com/rosanunez.es/wp-content/uploads/2022/10/tratamiento-energeye-rosa-nunez.jpg?resize=900%2C900&ssl=1'
> > }
> > {
> > "status": "success",
> > "message": "Treatment updated"
> > }

### treatments/all

> > GET http://localhost:4001/treatments/all
> > {
> > "status": "success",
> > "treatments": [
> >
> > > > {
> > > > "id": 2,
> > > > "name_treatment": "Facial saggin",
> > > > "description": "Contribution of DMAE hyaluronic acid and organic silicon reduces wrinkles, reaffirms the oval and raises cheekbones.",
> > > > "duration_treatment": "5 sessión 1 hour",
> > > > "img_url": "https://www.montserratquiros.es/wp-content/uploads/2021/03/Tratamiento-dermapen.jpg",
> > > > "status": "active",
> > > > "created_at": "2023-12-20T08:28:26.879Z",
> > > > "updated_at": "2023-12-20T08:28:26.879Z"
> > > > },
> > > > {
> > > > "id": 6,
> > > > "name_treatment": "eye contour",
> > > > "description": "application of biomimetic peptides, hyaluronic acid and silicon. To treat bags, dark circles and wrinkles",
> > > > "duration_treatment": "5 sessión 1 hour",
> > > > "img_url": "https://i0.wp.com/rosanunez.es/wp-content/uploads/2022/10/tratamiento-energeye-rosa-nunez.jpg?fit=906%2C906&ssl=1",
> > > > "status": "active",
> > > > "created_at": "2023-12-21T14:30:29.615Z",
> > > > "updated_at": "2023-12-21T14:30:29.615Z"
> > > > },
> > > > {
> > > > "id": 7,
> > > > "name_treatment": "body saggin",
> > > > "description": "Application of hyaluronic acid, DMAE and organic illium to firm and tighten the skin when it begins to lose its tension and flexibility.",
> > > > "duration_treatment": "6 sessión 1 hour",
> > > > "img_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fradiofrecuencia&psig=AOvVaw0rlVdHYNwFaZb8C8ifyWf2&ust=1703264605326000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiIsb2BoYMDFQAAAAAdAAAAABAE",
> > > > "status": "active",
> > > > "created_at": "2023-12-21T17:05:37.460Z",
> > > > "updated_at": "2023-12-21T17:05:37.460Z"
> > > > }
> > > > ]
> > > > }

### treatments/treatment_delete/22

> > DELETE http://localhost:4001/treatments/treatment_delete/22
> > {
> > "status": "success",
> > "message": "Treatment deleted"
> > }

### Appointments

### appointment_create

> > POST http://localhost:4001/appointments/appointment_create
> > {
> > user_Id: 1,
> > treatment_Id: 24,
> > name: 'body saggin',
> > date: '2023-12-27',
> > time: '09:00',
> > status: 'active'
> > }
> > {
> > "status": "success",
> > "message": "Appointment create success",
> > "appointment": {
> > "user_Id": 1,
> > "treatment_Id": 24,
> > "name": "body saggin",
> > "date": "2023-12-27",
> > "time": "09:00",
> > "status": "active",
> > "id": 2,
> > "created_at": "2023-12-24T01:24:35.666Z",
> > "updated_at": "2023-12-24T01:24:35.666Z"
> > }
> > }

### appointments/allAppointment

> > POST http://localhost:4001/appointments/allAppointments

> > {
> > "name": "body saggin",
> > "status": "active",
> > "date": "2023-12-27",
> > "time": "09:00"
> > }

> > {
> > "status": "success",
> > "appointments": [
> > {
> > "id": 1,
> > "user_Id": 34,
> > "treatment_Id": 2,
> > "name": "facial saggin",
> > "status": "active",
> > "date": "2023-12-22T23:00:00.000Z",
> > "time": "18:00",
> > "created_at": "2023-12-23T13:01:20.737Z",
> > "updated_at": "2023-12-23T13:01:20.737Z"
> > },

> > {
> > "id": 2,
> > "user_Id": 1,
> > "treatment_Id": 24,
> > "name": "body saggin",
> > "status": "active",
> > "date": "2023-12-26T23:00:00.000Z",
> > "time": "09:00",
> > "created_at": "2023-12-24T01:24:35.666Z",
> > "updated_at": "2023-12-24T01:24:35.666Z"
> > },
> > {
> > "id": 3,
> > "user_Id": 1,
> > "treatment_Id": 25,
> > "name": "scalp",
> > "status": "active",
> > "date": "2023-12-27T23:00:00.000Z",
> > "time": "10:00",
> > "created_at": "2023-12-24T01:58:43.368Z",
> > "updated_at": "2023-12-24T01:58:43.368Z"
> > },
> > {
> > "id": 4,
> > "user_Id": 32,
> > "treatment_Id": 26,
> > "name": "spots and pigmentation",
> > "status": "active",
> > "date": "2023-12-28T23:00:00.000Z",
> > "time": "16:00",
> > "created_at": "2023-12-24T02:01:09.004Z",
> > "updated_at": "2023-12-24T02:01:09.004Z"
> > }
> > ]
> > }

### appointments/appointment_update/:id

> > PUT http://localhost:4001/appointments/appointment_update/2
> > {
> > "name": "facial saggin",
> > "status": "active",
> > "date":"2023-12-27",
> > "time": "18:00"
> > }

> > {
> > "status": "success",
> > "message": "Appointment updated"
> > }

### appointments/appointment_delete/2

> > DELETE http://localhost:4001/appointments/appointment_update/2

> > {
> > "id":"2"
> > }

> > {
> > "status": "success",
> > "message": "Appointment deleted"
> > }

### Reviews

### review/create

> > POST http://localhost:4001/reviews/create

> > {
> > "user_Id": 1,
> > "treatment_Id": 2,
> > "rating": "10",
> > "feedback": "With all the sessions completed, you can see the change brought by the >> saggin facial treatment, which is highly recommended",
> > "status": "active"
> > }

> > {
> > "status": "success",
> > "message": "Review create success",
> > "review": {
> > "user_Id": 1,
> > "treatment_Id": 2,
> > "rating": "10",
> > "feedback": "With all the sessions completed, you can see the change brought by >> the saggin facial treatment, which is highly recommended",
> > "status": "active",
> > "id": 1,
> > "created_at": "2023-12-26T15:44:10.834Z",
> > "updated_at": "2023-12-26T15:44:10.834Z"
> > }
> > }

### Licence and copyright

📝 The copyright belongs to Meriyen Rodriguez, proposal for a backend application for appointment management, with the purpose of completing the final delivery project at Geekshubs academy.
