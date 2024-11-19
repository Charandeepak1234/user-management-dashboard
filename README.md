# user-management-dashboard
Here's a **README** file you can use for your **User Management Dashboard** project. It explains the purpose of the project, how to set it up, and how to use it.

---

# User Management Dashboard

A simple **User Management Dashboard** built with **vanilla JavaScript**, **HTML**, and **CSS**. The dashboard allows users to view, add, edit, and delete user details. It uses **local storage** to persist user data in the browser, simulating a mock backend. 

This project doesn't require any server-side code and is fully functional on the frontend. It is designed for educational purposes or as a simple user management UI solution.

---

## Features

- **View Users**: Display a list of users with details such as ID, First Name, Last Name, Email, and Department.
- **Add Users**: Add new users with all the necessary details.
- **Edit Users**: Edit details of existing users.
- **Delete Users**: Remove users from the list.
- **Local Storage**: Data is saved in the browser's local storage, so it persists across page reloads.
- **Form Validation**: Ensures that all fields are filled in correctly before submitting.
- **Error Handling**: Displays error messages when validation fails.

---

## Installation

### 1. Download the Project

Clone or download the project files from GitHub or by manually creating them in your local directory.

### 2. Set Up the Files

Ensure the following files are in the same directory:

```
/user-management-dashboard
    /index.html       # The main HTML file
    /styles.css       # The stylesheet
    /app.js           # JavaScript logic for user interactions
```

### 3. Open the Project in a Browser

- Navigate to the directory where the files are located.
- Open `index.html` in a modern web browser (Google Chrome, Firefox, etc.).
  
That's it! The dashboard will load in your browser, and you can start using it immediately.

---

## Usage

1. **View Users**: When you load the page, the list of users (if any) will be displayed in the table. Users are stored in **local storage** and persist across page reloads.
   
2. **Add User**: Click the **Add User** button at the top of the page to open the "Add User" form. Fill in the details (First Name, Last Name, Email, and Department), then click **Save** to add the new user. If any field is left empty, an error message will appear.

3. **Edit User**: To edit an existing user, click the **Edit** button next to the user's name. The form will be populated with that user's current details. After making the changes, click **Save** to update the user.

4. **Delete User**: To remove a user, click the **Delete** button next to the user’s name. The user will be immediately removed from the list.

5. **Error Messages**: If any form fields are missing or incorrectly filled out, an error message will appear under the form.

---

## Project Structure

### 1. `index.html`

This file contains the structure of the dashboard, including the table for displaying users, the add/edit form modal, and the buttons for interactions.

### 2. `styles.css`

This CSS file handles the basic styling of the page, including the table, modal form, buttons, and error messages.

### 3. `app.js`

This JavaScript file contains all the logic for adding, editing, deleting users, and handling user interactions. It also uses **localStorage** to persist user data across sessions.

---

## Local Storage Behavior

- **Adding Users**: When you add a new user, the user data is stored in the browser’s **localStorage**.
- **Editing Users**: When a user is edited, the updated information is stored in **localStorage**, replacing the old user data.
- **Deleting Users**: When a user is deleted, the user's data is removed from **localStorage**.

You can view the stored data in your browser's developer tools:

1. Open the **Developer Tools** (usually by pressing F12 or right-click → Inspect).
2. Go to the **Application** tab.
3. Under **Storage**, select **Local Storage**.
4. You will see the `users` key with the list of users stored in JSON format.

---

## Browser Compatibility

This project should work in most modern browsers, including:

- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

It uses standard HTML5, CSS, and JavaScript, with no external libraries (except for basic browser support features like `localStorage`).

---

## Future Improvements (Optional)

- **Pagination**: If you have a large number of users, you can implement pagination to display users in pages.
- **Form Validation**: Enhance the form validation to check for specific field types (e.g., valid email format).
- **Responsive Design**: Add media queries to make the dashboard fully responsive on mobile devices.
- **User Data Import/Export**: Allow users to import or export the list of users as a JSON file.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Conclusion

This User Management Dashboard is a simple, self-contained frontend application that demonstrates how to manage user data in the browser using **localStorage**. It offers basic functionality such as adding, editing, and deleting users with client-side validation and error handling.
