# svt-assessment

#Testing



###Example Post request(top) and response(bottom)
![Data flow design](images/botAPIPostman.png)

---

#Next Steps
  - Increase search efficiency
    -Implementation: Slice off array at the index of bots outside of 10 units

  - Add input validation for load coordinates outside of grid boundaries and stationary obstacles 
    -Implementation: Define grid x, y boundaries rejecting any input within no go areas

  - Move more logic out of server.js to more closely align with single responsibility principles
    -Implementation: Write functions for filtering and object key addition/subtraction

  -Learn to build this thing in .NET Core!

#Design
![Data flow design](images/botAPI.png)
