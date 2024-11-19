// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList').getElementsByTagName('tbody')[0];
    const userFormModal = document.getElementById('userFormModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const addUserBtn = document.getElementById('addUserBtn');
    const userForm = document.getElementById('userForm');
    const errorMessage = document.getElementById('errorMessage');
    let editingUserId = null;
  
    // Get users from localStorage or default to an empty array
    function getUsers() {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      return users;
    }
  
    // Save users to localStorage
    function saveUsers(users) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  
    // Display users in the table
    function displayUsers(users) {
      userList.innerHTML = ''; // Clear existing rows
      users.forEach(user => {
        const row = userList.insertRow();
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.email}</td>
          <td>${user.department}</td>
          <td>
            <button class="editBtn" data-id="${user.id}">Edit</button>
            <button class="deleteBtn" data-id="${user.id}">Delete</button>
          </td>
        `;
  
        // Edit button
        row.querySelector('.editBtn').addEventListener('click', () => {
          editUser(user);
        });
  
        // Delete button
        row.querySelector('.deleteBtn').addEventListener('click', () => {
          deleteUser(user.id);
        });
      });
    }
  
    // Edit user
    function editUser(user) {
      editingUserId = user.id;
      document.getElementById('firstName').value = user.firstName;
      document.getElementById('lastName').value = user.lastName;
      document.getElementById('email').value = user.email;
      document.getElementById('department').value = user.department;
      document.getElementById('formTitle').textContent = 'Edit User';
      userFormModal.style.display = 'block';
    }
  
    // Delete user
    function deleteUser(userId) {
      const users = getUsers();
      const filteredUsers = users.filter(user => user.id !== userId);
      saveUsers(filteredUsers);
      displayUsers(filteredUsers); // Re-render user list
    }
  
    // Close modal
    closeModalBtn.addEventListener('click', () => {
      userFormModal.style.display = 'none';
    });
  
    // Add user
    addUserBtn.addEventListener('click', () => {
      editingUserId = null;
      document.getElementById('formTitle').textContent = 'Add User';
      userForm.reset();
      userFormModal.style.display = 'block';
    });
  
    // Handle form submit (Add/Edit)
    userForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const department = document.getElementById('department').value;
  
      if (!firstName || !lastName || !email || !department) {
        showErrorMessage('Please fill in all fields correctly.');
        return;
      }
  
      const userData = {
        id: editingUserId || new Date().getTime(), // Unique ID based on timestamp
        firstName,
        lastName,
        email,
        department
      };
  
      const users = getUsers();
  
      if (editingUserId) {
        // Update user
        const index = users.findIndex(user => user.id === editingUserId);
        users[index] = userData;
      } else {
        // Add new user
        users.push(userData);
      }
  
      saveUsers(users);
      displayUsers(users); // Refresh user list
      userFormModal.style.display = 'none'; // Close modal
    });
  
    // Show error message
    function showErrorMessage(message) {
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
    }
  
    // Initial load
    displayUsers(getUsers());
  });
  