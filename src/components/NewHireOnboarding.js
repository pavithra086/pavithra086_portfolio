import React from 'react';
import { Link } from 'react-router-dom';
import Picture1 from './img/Picture1.png';
// Ensure the correct path to your CSS file

const EmployeeNewHireOnboardingAutomation = () => {
  return (
    <section className="project-detail-section">
      <Link to="/pavithra086_portfolio/portfoliosection">Back to Portfolio</Link>
      <h2>Employee New Hire Onboarding Automation</h2>
      <h3>Overview</h3>
      <p>
        I led the development and implementation of an automation process to streamline the onboarding of new hires. The project aimed to automate manual tasks associated with collecting and verifying employee data, granting access to necessary systems, and tracking the onboarding process.
      </p>
      <h3>Key Responsibilities:</h3>
      <ul>
        <li>Designed and built a robotic process automation (RPA) bot using UiPath, Python, and Selenium to automate the entire onboarding workflow.</li>
        <li>Automated the retrieval of new hire data from a centralized folder, ensuring accurate and timely processing.</li>
        <li>Implemented logic to verify specific employee attributes, such as legal compliance indicators, and automate role assignment based on reference profiles.</li>
        <li>Integrated the automation with identity management systems and ticketing systems to request access and document the onboarding process.</li>
        <li>Developed exception handling mechanisms to manage cases like missing data or system downtimes, ensuring smooth operation and timely alerts.</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li><strong>UiPath:</strong> For orchestrating the automation workflow.</li>
        <li><strong>Python:</strong> For scripting tasks such as accessing external systems and processing data.</li>
        <li><strong>Selenium:</strong> For interacting with web-based applications as part of the automation.</li>
      </ul>
      <h3>Flowchart Explanation</h3>
<img src={Picture1} alt="Onboarding Automation Overview" />
       <h3>Flowchart Explanation</h3>
      <p>This flowchart represents the automated process for onboarding new employees. Here's a step-by-step explanation:</p>
      <ol>
        <li><strong>Start:</strong> The process begins with the start node, initiating the onboarding workflow.</li>
        <li><strong>Download Sheet from Box:</strong> A Python script is used to access the Box folder and download a spreadsheet that contains the necessary information for onboarding new employees.</li>
        <li><strong>Collect SSO and Applications:</strong> The downloaded spreadsheet is used to collect the Single Sign-On (SSO) credentials and the list of applications that need to be requested for the new hire.</li>
        <li><strong>Iterate Sheet:</strong> The process iterates through each row (each user) in the spreadsheet to process them one by one.</li>
        <li><strong>SSO to be Mirrored Present?:</strong> Decision Point: Checks if the SSO (used as a reference) is available.
          <ul>
            <li><strong>Yes:</strong> If the reference SSO is present, the process moves forward to retrieve roles.</li>
            <li><strong>No:</strong> If the reference SSO is not present, the process logs this information and moves to the next user.</li>
          </ul>
        </li>
        <li><strong>Retrieve Roles from OneIDM for Required Application:</strong> The roles associated with the reference SSO are retrieved from the OneIDM system for the required application.</li>
        <li><strong>US Person Indicator Set?:</strong> Decision Point: Checks if the US Person Indicator is set to "Yes".
          <ul>
            <li><strong>Yes:</strong> If the indicator is set, the process continues to look up the application in the IDM system.</li>
            <li><strong>No:</strong> If the indicator is not set, the process logs this issue and proceeds to the next user.</li>
          </ul>
        </li>
        <li><strong>Look Application in IDM:</strong> The application associated with the user is looked up in the Identity Management (IDM) system.</li>
        <li><strong>Request Roles for New Joinee:</strong> The required roles for the new employee are requested in the IDM system based on the information retrieved earlier.</li>
        <li><strong>Create SNOW Ticket:</strong> A ServiceNow (SNOW) ticket is created to document the role request and other relevant details for the new hire.</li>
        <li><strong>Are There More Users?:</strong> Decision Point: Checks if there are more users to process.
          <ul>
            <li><strong>Yes:</strong> If there are more users, the process loops back to iterate through the next user in the spreadsheet.</li>
            <li><strong>No:</strong> If there are no more users, the process proceeds to close tickets.</li>
          </ul>
        </li>
        <li><strong>Close Tickets:</strong> The tickets created in the previous steps are closed, indicating that the role requests have been completed.</li>
        <li><strong>Send Debug Mail:</strong> An email is sent containing any debug information, such as exceptions encountered during the process (e.g., missing reference SSO, US Person Indicator not set).</li>
        <li><strong>End:</strong> The process concludes.</li>
      </ol>
      <p>
        <strong>Key Points:</strong>
        <ul>
          <li><strong>Python Implementation:</strong> The initial stages of the process (e.g., downloading the sheet, iterating through it) are handled by Python.</li>
          <li><strong>UiPath Implementation:</strong> The latter stages (e.g., interacting with IDM and ServiceNow, sending emails) are automated using UiPath.</li>
          <li><strong>Decision Points:</strong> The flowchart includes several decision points where the process checks for certain conditions (e.g., the presence of SSO, the US Person Indicator) to determine the next steps.</li>
        </ul>
      </p>
      <p>This flowchart effectively illustrates an automated onboarding process, ensuring that each step is handled systematically, and any exceptions are logged and reported.</p>
      <h3>Outcome:</h3>
      <p>
        The automation significantly reduced the time required to onboard new hires, minimized errors associated with manual data entry, and provided a scalable solution to handle increased onboarding volumes.
      </p>
    </section>
  );
};

export default EmployeeNewHireOnboardingAutomation;
