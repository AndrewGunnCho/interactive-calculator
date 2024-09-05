# interactive-calculator

This CLI tool implements a basic four-function calculator (addition, subtraction, multiplication, division) with an interactive command-line interface. Users input a sequence of calculator commands, and the tool maintains state between inputs, providing output for each operation and allowing further calculations or reset with specific commands.

Constraints: 2 hours

Objective: To challenge myself by implementing this in JavaScript/Node.js.

## Thought Process

### 1. Understand the Problem and Plan
### Identify the core features:
  - Basic arithmetic operations (```+```, ```-```, ```*```, ```/```).
  - Handling special inputs (clear ```c```, toggle sign ```!```, percentage sign ```%```, and equals ```=```).
  - Maintaining and updating the calculator's state.
  - Interactive command-line interface.


### 2. Implementation Choice
- For this technical assignment, I chose to use ```math.js``` because it significantly simplifies the task of evaluating mathematical expressions. ```math.js``` provides a robust and reliable way to handle a wide range of calculations, allowing me to focus on implementing the interactive CLI interface rather than dealing with complex parsing and evaluation logic. By leveraging this library, I ensure accurate and efficient computations, which is crucial for the correctness of the calculator. I discovered ```math.js``` through research into JavaScript libraries that handle mathematical expressions, and after evaluating its features and alternatives, I found it to be the most suitable option for meeting the assignment's requirements. This choice helps me adhere to best practices in code architecture and maintain a clean, modular codebase.

## Challenges and Solutions

### Challenge 1:
- Issue: The program should display the result based on previous inputs when Enter is pressed and prompt for more input. Results should be shown only when the ```=``` key is pressed

- Encountered Issue: There was confusion about handling operations not immediately followed by ```=```. Using a real calculator clarified that results should not be calculated until ```=``` is pressed. For instance, entering ```2+45``` shows ```45``` before ```=``` is pressed, and updates to ```47``` afterward. Similarly, ```*3=``` should result in ```141```, and ```-8+12=``` should result in ```145```.

- Conclusion: The calculator maintains state between inputs. Pressing Enter updates the display based on the last operation or evaluates the expression if ```=``` is pressed. I used a regex function to return the last given number if no ```=``` is sent.

### Challenge 2:
- Issue: Initially, I overcomplicated the solution by managing three different states to handle sequential operations like ```2+3*4```. After finding that ```math.js``` can handle complex operations, I simplified this to use a single state. However, additional states may be needed for pending operators and numbers entered after operators but before ```=```.
- Solution: The final approach uses a single variable to maintain state and removes the ```=``` sign from the expression to evaluate the final value. An ```=``` sign will decide if that final value is sent or not. There is a bug when handling single arithmetic operations.

### Challenge 3:
- Issue: Making the Node.js program interactive required implementing a loop to continuously read user input.
- Solution: I referred to the Node.js documentation and added promptUser to create a loop that continuously reads and processes user input.
  - https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs


### Challenge 4:
- Issue: Since inputs are not limited like on an actual calculator, I needed to safeguard the application from invalid inputs.
- Solution: I added a validation step to ensure that only numbers and arithmetic operators are allowed to proceed with the application.

## Current Functionality

### Total time spent: 2 hours and 35 minutes

- Start Time: 11:25 AM

- End Time: 2:00 PM

### The calculator can handle inputs like:

```
0
> 2+45
45
> =
47
> *3=
141
> -8+12=
145
> c
0
```

Bugs: Currently, it cannot handle single mathematical operators like ```+```, ```-```, ```*```, ```/``` and retains an Error state until closed.

## Local deploy
### To build & run locally using npm:
- Install dependencies: ```npm install```
- Run the application: ```node src/index.js```
