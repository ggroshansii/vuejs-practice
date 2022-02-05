<template>
  <div class="container">
    <form>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
          <form action="">
            <div>
              <label for="first-name">
                First Name:
                <input v-model="formData.firstName" id="first-name" type="text" />
              </label>
            </div>

            <div>
              <label for="last-name">
                Last Name:
                <input v-model="formData.lastName" id="last-name" type="text" />
              </label>
            </div>

            <div>
              <label for="password">
                Password:
                <input v-model="formData.password" id="password" type="password" />
              </label>
            </div>

            <div>
              <label for="email">
                Email:
                <input v-model="formData.email" id="email" type="email" />
              </label>
            </div>

            <div>
              <p>Store Data?</p>
              <label for="store-data-yes">
                <input
                  v-model="formData.storeData"
                  type="radio"
                  name="store-data"
                  id="store-data-yes"
                  value="yes"
                />
                Yes
              </label>
              <label for="store-data-no">
                <input
                  v-model="formData.storeData"
                  type="radio"
                  name="store-data"
                  id="store-data-no"
                  value="no"
                />
                No
              </label>
            </div>
          </form>
        </div>
      </div>
    </form>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>First Name: {{formData.firstName}}</p>
            <p>Last Name: {{formData.lastName}}</p>
            <p>Mail: {{formData.email}}</p>
            <p>Password: {{formData.password}}</p>
            <p>Store in Database?: {{formData.storeData}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: null,
        lastName: null,
        password: null,
        email: null,
        storeData: null,
      },
    };
  },
};
</script>

<style>
</style>
