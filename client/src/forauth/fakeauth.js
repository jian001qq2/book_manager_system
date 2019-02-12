export default  {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
  /**
   * export default {
    jobs: [
        {
            jobType: "Web developer",
            desc: "Creates website"
        },
        {
            jobType: "Bin Man",
            desc: "Collects bins"
        }
    ]
};
   */