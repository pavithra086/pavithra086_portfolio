import React from 'react';
import { Link } from 'react-router-dom';
import picture2 from './img/picture2.png';
// Ensure the correct path to your diagram image

const RailwayReservationSystem = () => {
    return (
      <section className="project-detail-section">
        <Link to="/pavithra086_portfolio/#/portfolio">Back to Portfolio</Link>
        <h2>Railway Reservation System</h2>
        <h3>Overview</h3>
        <p>
          This project is designed for the online reservation of railway tickets. It allows passengers to book tickets, view train schedules, and manage personal details. The system integrates multiple microservices for handling passengers, trains, and bookings.
        </p>
        
        <h3>Project Background and Objective</h3>
        <p>
          The Railway Reservation System consists of several microservices that handle passenger registration, train management, and booking operations. The system enables advanced booking for various travel classes and quotas. The objective is to streamline the ticketing process for passengers, providing a seamless experience for booking and managing reservations.
        </p>
  
        <h3>Microservices</h3>
        <ul>
          <li><strong>Passenger Microservice:</strong> Handles passenger registration and management of passenger details.</li>
          <li><strong>Train Microservice:</strong> Registers trains and provides a list of available trains for passengers.</li>
          <li><strong>Booking Microservice:</strong> Manages seat booking for passengers and generates tickets.</li>
          <li><strong>Admin Microservice:</strong> Manages admin details</li>
          <li><strong>Payment Microservice:</strong> Manages the payment option for the booking </li>
        </ul>
  
        <h3>Design Pattern</h3>
        <p>The Railway Reservation System uses an API-based architecture to handle HTTP requests for various operations.</p>
  
        <h3>Solution Diagram</h3>
        <img src={picture2} alt="Railway Reservation System Solution Diagram" />
  
        <h3>Solution Steps</h3>
        <h4>Passenger Registration</h4>
        <ol>
          <li>Passenger submits required details (e.g., name, age, address).</li>
          <li>API gateway routes the request to the registration handler.</li>
          <li>The system validates passenger data and stores it in the database.</li>
          <li>Returns a success response with the passenger's details.</li>
        </ol>
  
        <h4>Passenger Management (Listing, Updation, Deletion)</h4>
        <p>Similar processes for listing, updating, and deleting passenger details using specific APIs, with proper validation and database interaction.</p>
  
        <h4>Train Management</h4>
        <ol>
          <li>Admin registers trains with details like source, destination, fare, etc.</li>
          <li>The API gateway routes requests to the respective handlers for train listing, updating, and deletion.</li>
          <li>Database interaction for managing train data.</li>
        </ol>
  
        <h4>Booking</h4>
        <ol>
          <li>Passenger logs in with a username and password.</li>
          <li>API routes booking requests to the appropriate handler.</li>
          <li>The system confirms seat availability and books the ticket, returning a confirmation response.</li>
        </ol>
  
        <h4>Add Train</h4>
        <ol>
          <li>Admin enters train details (e.g., train number, name, source, route, destination, seats, etc.) and submits the form.</li>
          <li>The request is directed to the Train Management Microservice through the API gateway.</li>
          <li>Request gets forwarded to the TrainController, which calls <code>addTrain()</code>.</li>
          <li>The input undergoes bean validation. If validation fails, an error code and description are returned with a status code. If successful, the TrainService stores the data in the database via the TrainRepository.</li>
          <li>A success JSON response with an HTTP status code 200 and a success message is returned.</li>
        </ol>
  
        <h4>Train List</h4>
        <ol>
          <li>Admin clicks "View" to get all train details, and the request is directed to the Train Management Microservice through the API gateway.</li>
          <li>Request is forwarded to the TrainController, which calls <code>listAllTrain()</code>.</li>
          <li>The TrainService retrieves the train data from the database through TrainRepository.</li>
          <li>A success JSON response with an HTTP status code 200 and train details is returned.</li>
        </ol>
  
        <h4>Particular Train List</h4>
        <ol>
          <li>Admin enters a train number to fetch specific details. The request is directed to the Train Management Microservice through the API gateway.</li>
          <li>Request is forwarded to the TrainController, which calls <code>listTrain()</code>.</li>
          <li>The TrainService retrieves the specific train data from the database through TrainRepository.</li>
          <li>A success JSON response with an HTTP status code 200 and train details is returned.</li>
        </ol>
  
        <h4>Train Deletion</h4>
        <ol>
          <li>Admin deletes a specific train by entering the train ID. The request is directed to the Train Management Microservice.</li>
          <li>Request is forwarded to the TrainController, which calls <code>deleteTrain()</code>.</li>
          <li>The TrainService deletes the data from the database via TrainRepository.</li>
          <li>A success JSON response with an HTTP status code 200 and a success message is returned.</li>
        </ol>
  
        <h4>Train Updation</h4>
        <ol>
          <li>Admin updates train details by entering the train number and new details. The request is directed to the Train Management Microservice through the API gateway.</li>
          <li>Request is forwarded to the TrainController, which calls <code>trainUpdate()</code>.</li>
          <li>The input undergoes bean validation. If validation fails, an error code and description are returned. If successful, the TrainService updates the data in the database via TrainRepository.</li>
          <li>A success JSON response with an HTTP status code 200 and a success message is returned.</li>
        </ol>
  
        <h4>Train Search</h4>
        <ol>
          <li>Passengers enter the source, destination, and journey date to search for available trains. The request is directed to the Train Management Microservice through the API gateway.</li>
          <li>Request is forwarded to the TrainController, which calls <code>searchTrain()</code>.</li>
          <li>The TrainService searches the database via TrainRepository for available trains.</li>
          <li>A success JSON response with an HTTP status code 200 and train details is returned.</li>
        </ol>
  
        <h3>Outcome</h3>
        <p>
          The Railway Reservation System offers a user-friendly, scalable solution for booking railway tickets. By automating passenger and train management, it reduces manual intervention and provides real-time ticket availability and booking services.
        </p>
      </section>
    );
  };
  
  export default RailwayReservationSystem;