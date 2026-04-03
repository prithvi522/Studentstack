// Course notes and videos data

const baseCourseNotes: Record<string, string> = {
  HTML: `
<h3>HTML Basics</h3>
<p>HTML stands for HyperText Markup Language. It is the standard language used to create webpages and web applications.</p>
<p>HTML describes the structure of a webpage using elements and tags.</p>

<h4>Basic HTML Document Structure</h4>
<pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;p&gt;This is my first webpage&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h4>Explanation of Each Tag</h4>
<p><b>&lt;!DOCTYPE html&gt;</b> – Defines the document type.</p>
<p><b>&lt;html&gt;</b> – Root element of the HTML page.</p>
<p><b>&lt;head&gt;</b> – Contains meta information about the document.</p>
<p><b>&lt;title&gt;</b> – Specifies the title of the webpage.</p>
<p><b>&lt;body&gt;</b> – Contains the visible page content.</p>

<h4>HTML Headings</h4>
<p>HTML headings are defined with &lt;h1&gt; to &lt;h6&gt; tags.</p>
<pre>
&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h2&gt;Sub Heading&lt;/h2&gt;
&lt;h3&gt;Smaller Heading&lt;/h3&gt;
</pre>

<h4>HTML Paragraph</h4>
<p>Paragraphs are defined using the &lt;p&gt; tag.</p>
<pre>
&lt;p&gt;This is a paragraph&lt;/p&gt;
</pre>

<h4>HTML Links</h4>
<p>Links are created using the anchor tag.</p>
<pre>
&lt;a href="https://google.com"&gt;Visit Google&lt;/a&gt;
</pre>

<h4>HTML Images</h4>
<p>Images are added using the &lt;img&gt; tag.</p>
<pre>
&lt;img src="image.jpg" alt="Sample Image" width="200"&gt;
</pre>

<h4>HTML Lists</h4>
<p><b>Unordered List</b></p>
<pre>
&lt;ul&gt;
&lt;li&gt;HTML&lt;/li&gt;
&lt;li&gt;CSS&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h4>HTML Forms</h4>
<p>Forms are used to collect user input.</p>
<pre>
&lt;form&gt;
&lt;label&gt;Name&lt;/label&gt;
&lt;input type="text"&gt;
&lt;button&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</pre>

<h4>Best Practices</h4>
<ul>
<li>Always use proper indentation.</li>
<li>Use semantic HTML elements.</li>
<li>Add alt text to images.</li>
<li>Keep HTML clean and readable.</li>
</ul>
`,

  CSS: `
<h3>CSS Basics</h3>
<p>CSS stands for Cascading Style Sheets. It is used to style and design webpages.</p>

<h4>Basic CSS Syntax</h4>
<pre>
selector{
    property: value;
}
</pre>

<h4>Ways to Add CSS</h4>
<p><b>1. Inline CSS</b></p>
<pre>
&lt;p style="color:red"&gt;Hello World&lt;/p&gt;
</pre>

<p><b>2. Internal CSS</b></p>
<pre>
&lt;style&gt;
p{
    color:blue;
}
&lt;/style&gt;
</pre>

<p><b>3. External CSS</b></p>
<pre>
&lt;link rel="stylesheet" href="style.css"&gt;
</pre>

<h4>CSS Selectors</h4>
<p><b>Element Selector</b></p>
<pre>
p{
    color:green;
}
</pre>

<p><b>Class Selector</b></p>
<pre>
.box{
    background:yellow;
}
</pre>

<h4>CSS Colors</h4>
<pre>
h1{
    color:red;
}
</pre>

<h4>CSS Fonts</h4>
<pre>
p{
    font-family:Arial;
    font-size:18px;
    font-weight:bold;
}
</pre>

<h4>CSS Flexbox</h4>
<pre>
.container{
    display:flex;
    justify-content:center;
    align-items:center;
}
</pre>

<h4>Best Practices</h4>
<ul>
<li>Use external CSS for large projects.</li>
<li>Keep CSS organized and readable.</li>
<li>Use classes instead of IDs for styling.</li>
</ul>
`,

  JavaScript: `
<h3>JavaScript Basics</h3>
<p>JavaScript is a programming language used to make webpages interactive.</p>

<h4>Variables</h4>
<pre>
let name = "John";
const age = 25;
var city = "New York";
</pre>

<h4>Data Types</h4>
<pre>
let name = "Alice";    // String
let age = 22;         // Number
let isStudent = true; // Boolean
</pre>

<h4>Functions</h4>
<pre>
function greet(){
    console.log("Hello");
}
greet();
</pre>

<h4>Arrays</h4>
<pre>
let fruits = ["Apple","Banana","Orange"];
console.log(fruits[0]);
</pre>

<h4>Loops</h4>
<pre>
for(let i=0;i<5;i++){
    console.log(i);
}
</pre>

<h4>DOM Manipulation</h4>
<pre>
const title = "New Title";
console.log(title);
</pre>

<h4>Best Practices</h4>
<ul>
<li>Use let and const instead of var.</li>
<li>Keep code clean and readable.</li>
<li>Use meaningful variable names.</li>
</ul>
`,

  TypeScript: `
<h3>TypeScript Basics</h3>
<p>TypeScript is a superset of JavaScript that adds static typing.</p>

<h4>Basic TypeScript Example</h4>
<pre>
let message: string = "Hello TypeScript";
console.log(message);
</pre>

<h4>TypeScript Variables</h4>
<pre>
let name: string = "John";
let age: number = 25;
let isStudent: boolean = true;
console.log(name, age, isStudent);
</pre>

<h4>Functions</h4>
<pre>
function add(a: number, b: number): number{
    return a + b;
}
console.log(add(5,3));
</pre>

<h4>Interfaces</h4>
<pre>
interface Person{
    name: string;
    age: number;
}
const person: Person = { name: "John", age: 25 };
console.log(person.name, person.age);
</pre>

<h4>Best Practices</h4>
<ul>
<li>Always define types when possible</li>
<li>Use interfaces for object structures</li>
<li>Use strict mode</li>
</ul>
`,

  Python: `
<h3>Python Basics</h3>
<p>Python is a high-level programming language known for its simple syntax.</p>

<h4>Python Hello World</h4>
<pre>
print("Hello World")
</pre>

<h4>Python Variables</h4>
<pre>
name = "John"
age = 25
price = 19.99
</pre>

<h4>Conditional Statements</h4>
<pre>
age = 18
if age >= 18:
    print("You can vote")
else:
    print("You cannot vote")
</pre>

<h4>Python Loops</h4>
<pre>
print(0)
print(1)
print(2)
print(3)
print(4)
</pre>

<h4>Python Functions</h4>
<pre>
def add(a,b):
    return a + b
result = add(5,3)
print(result)
</pre>

<h4>Best Practices</h4>
<ul>
<li>Write clean and readable code.</li>
<li>Use meaningful variable names.</li>
<li>Follow Python indentation rules.</li>
</ul>
`,

  Java: `
<h3>Java Basics</h3>
<p>Java is an object-oriented programming language used for building applications.</p>

<h4>Java Hello World</h4>
<pre>
class Hello{
    public static void main(String[] args){
        System.out.println("Hello World");
    }
}
</pre>

<h4>Java Variables</h4>
<pre>
class Main {
    public static void main(String[] args){
        int age = 25;
        double price = 19.99;
        String name = "John";
        System.out.println(name + " " + age + " " + price);
    }
}
</pre>

<h4>Java Methods</h4>
<pre>
class Main {
    public static int add(int a,int b){
        return a + b;
    }

    public static void main(String[] args){
        System.out.println(add(5,3));
    }
}
</pre>

<h4>Java Arrays</h4>
<pre>
class Main {
    public static void main(String[] args){
        int[] numbers = {1,2,3,4,5};
        System.out.println(numbers[0]);
    }
}
</pre>

<h4>Best Practices</h4>
<ul>
<li>Use meaningful variable names.</li>
<li>Follow proper indentation.</li>
<li>Use object-oriented principles.</li>
</ul>
`,

  PHP: `
<h3>PHP Basics</h3>
<p>PHP is a server-side scripting language used for web development.</p>

<h4>PHP Syntax</h4>
<pre>
&lt;?php
echo "Hello World";
?&gt;
</pre>

<h4>Variables</h4>
<pre>
$name = "John";
$age = 25;
echo "Name: " . $name;
</pre>

<h4>Conditional Statements</h4>
<pre>
$age = 18;
if($age >= 18){
    echo "You can vote";
} else {
    echo "You cannot vote";
}
</pre>

<h4>Functions</h4>
<pre>
$message = "Hello";
echo $message;
</pre>

<h4>Best Practices</h4>
<ul>
<li>Use meaningful variable names.</li>
<li>Keep code modular with functions.</li>
<li>Sanitize user input.</li>
</ul>
`,

  Ruby: `
<h3>Ruby Basics</h3>
<p>Ruby is a dynamic, object-oriented programming language.</p>

<h4>Ruby Hello World</h4>
<pre>
puts "Hello World"
</pre>

<h4>Ruby Variables</h4>
<pre>
name = "John"
age = 25
</pre>

<h4>Methods</h4>
<pre>
name = "John"
puts "Hello, #{name}!"
</pre>

<h4>Arrays</h4>
<pre>
fruit = "apple"
puts fruit
</pre>

<h4>Best Practices</h4>
<ul>
<li>Use meaningful variable names</li>
<li>Follow Ruby conventions</li>
<li>Keep methods short and focused</li>
</ul>
`,

  Go: `
<h3>Go (Golang) Basics</h3>
<p>Go is a modern, compiled programming language created by Google.</p>

<h4>Go Hello World</h4>
<pre>
package main
import "fmt"

func main() {
    fmt.Println("Hello World")
}
</pre>

<h4>Go Variables</h4>
<pre>
var name string = "John"
age := 25
fmt.Println(name, age)
</pre>

<h4>Functions</h4>
<pre>
func add(a int, b int) int {
    return a + b
}

func main() {
    fmt.Println(add(5, 3))
}
</pre>

<h4>Slices</h4>
<pre>
package main
import "fmt"

func main() {
    fruits := []string{"apple", "banana"}
    fmt.Println(fruits[0])
}
</pre>

<h4>Best Practices</h4>
<ul>
<li>Keep functions small and focused</li>
<li>Handle errors explicitly</li>
<li>Use Go's standard formatting</li>
</ul>
`,

  NodeJS: `
<h3>Node.js Basics</h3>
<p>Node.js is a JavaScript runtime for server-side programming.</p>

<h4>Node.js Hello World</h4>
<pre>
console.log("Hello Node.js");
</pre>

<h4>Creating HTTP Server</h4>
<pre>
const route = "/";
const response = "Hello from Node.js!";
console.log("Server route:", route);
console.log("Response:", response);
</pre>

<h4>Express.js Framework</h4>
<pre>
const route = "/";
const message = "Hello Express!";
console.log("GET", route);
console.log(message);
</pre>

<h4>Best Practices</h4>
<ul>
<li>Use async/await instead of callbacks</li>
<li>Always handle errors properly</li>
<li>Use environment variables</li>
</ul>
`,

  SQL: `
<h3>SQL Basics</h3>
<p>SQL is used to communicate with databases.</p>

<h4>Basic SQL Query</h4>
<pre>
SELECT * FROM users;
</pre>

<h4>WHERE Clause</h4>
<pre>
SELECT * FROM users WHERE age > 20;
</pre>

<h4>INSERT Data</h4>
<pre>
SELECT 'John' AS name, 25 AS age;
</pre>

<h4>UPDATE Data</h4>
<pre>
SELECT 'John' AS name, 26 AS age;
</pre>

<h4>DELETE Data</h4>
<pre>
SELECT 'Alice removed' AS status;
</pre>

<h4>Best Practices</h4>
<ul>
<li>Use meaningful table and column names.</li>
<li>Always use WHERE when updating or deleting.</li>
<li>Normalize database tables.</li>
</ul>
`,

  C: `
<h3>C Programming Basics</h3>
<p>C is a foundational programming language known for its speed.</p>

<h4>C Hello World</h4>
<pre>
#include &lt;stdio.h&gt;
int main() {
    printf("Hello World\\n");
    return 0;
}
</pre>

<h4>C Variables</h4>
<pre>
int age = 25;
float price = 19.99;
char grade = 'A';
printf("%d %.2f %c", age, price, grade);
</pre>

<h4>Functions</h4>
<pre>
int add(int a, int b) {
    return a + b;
}

int main() {
    printf("%d", add(5, 3));
    return 0;
}
</pre>

<h4>Arrays</h4>
<pre>
#include &lt;stdio.h&gt;
int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    printf("%d", numbers[0]);
    return 0;
}
</pre>

<h4>Best Practices</h4>
<ul>
<li>Always initialize variables</li>
<li>Use meaningful names</li>
<li>Free dynamically allocated memory</li>
</ul>
`,

  "C++": `
<h3>C++ Basics</h3>
<p>C++ is an extension of C with object-oriented features.</p>

<h4>C++ Hello World</h4>
<pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    cout << "Hello World" << endl;
    return 0;
}
</pre>

<h4>C++ Variables</h4>
<pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int age = 25;
    string name = "John";
    cout << name << " " << age << endl;
    return 0;
}
</pre>

<h4>Classes</h4>
<pre>
#include &lt;iostream&gt;
using namespace std;

class Person {
private:
    string name;
public:
    Person(string n) : name(n) {}
    void display() {
        cout << name << endl;
    }
};

int main() {
    Person p("John");
    p.display();
    return 0;
}
</pre>

<h4>Best Practices</h4>
<ul>
<li>Use smart pointers</li>
<li>Prefer const correctness</li>
<li>Use references when possible</li>
</ul>
`,

  "C#": `
<h3>C# Basics</h3>
<p>C# is a modern programming language developed by Microsoft.</p>

<h4>C# Hello World</h4>
<pre>
using System;
class Program {
    static void Main() {
        Console.WriteLine("Hello World");
    }
}
</pre>

<h4>C# Variables</h4>
<pre>
using System;
class Program {
    static void Main() {
        int age = 25;
        string name = "John";
        bool isActive = true;
        Console.WriteLine(name + " " + age + " " + isActive);
    }
}
</pre>

<h4>Methods</h4>
<pre>
using System;
class Program {
    static int Add(int a, int b) {
        return a + b;
    }

    static void Main() {
        Console.WriteLine(Add(5, 3));
    }
}
</pre>

<h4>Classes</h4>
<pre>
public class Person {
    public string Name { get; set; }
    public int Age { get; set; }
}

class Program {
    static void Main() {
        Person person = new Person { Name = "John", Age = 25 };
        Console.WriteLine(person.Name + " " + person.Age);
    }
}
</pre>

<h4>Best Practices</h4>
<ul>
<li>Use properties instead of fields</li>
<li>Use async/await for I/O</li>
<li>Follow .NET naming conventions</li>
</ul>
`,

  Bash: `
<h3>Bash Scripting Basics</h3>
<p>Bash is a command-line shell for automating tasks.</p>

<h4>Bash Hello World</h4>
<pre>
#!/bin/bash
echo "Hello World"
</pre>

<h4>Variables</h4>
<pre>
name="John"
age=25
echo "Name: $name"
</pre>

<h4>Conditional Statements</h4>
<pre>
age=18
if [ $age -ge 18 ]; then
    echo "You can vote"
else
    echo "You cannot vote"
fi
</pre>

<h4>Loops</h4>
<pre>
echo "Number: 1"
echo "Number: 2"
echo "Number: 3"
echo "Number: 4"
echo "Number: 5"
</pre>

<h4>Functions</h4>
<pre>
name="John"
echo "Hello $name"
</pre>

<h4>Best Practices</h4>
<ul>
<li>Always use shebang</li>
<li>Quote variables</li>
<li>Make scripts executable</li>
</ul>
`
};

type NoteKit = {
  theme: string;
  foundation: string;
  snippet: string;
  practice: string;
  reviewPoints: string[];
  advancedTopics: string[];
};

const courseNoteKits: Record<string, NoteKit> = {
  HTML: { theme: "semantic page building", foundation: "structure, accessibility, and content flow", snippet: "<main>\n  <section>\n    <h1>Course Title</h1>\n    <p>Lesson summary</p>\n  </section>\n</main>", practice: "Create a course landing page using semantic tags only.", reviewPoints: ["Use the right tag before styling.", "Keep headings in order.", "Review alt text and labels."], advancedTopics: ["semantic layout", "form design", "media markup", "content hierarchy"] },
  CSS: { theme: "visual styling and layout", foundation: "spacing, color, hierarchy, and responsiveness", snippet: ".card {\n  padding: 24px;\n  border-radius: 20px;\n  background: white;\n  color: #0f172a;\n}", practice: "Style a lesson card with spacing, color, and responsive behavior.", reviewPoints: ["Keep spacing consistent.", "Use variables and reusable classes.", "Check mobile layout early."], advancedTopics: ["specificity", "responsive layout", "flex and grid", "visual hierarchy"] },
  JavaScript: { theme: "logic and browser interaction", foundation: "variables, conditions, functions, arrays, and DOM updates", snippet: "const lessons = [\"HTML\", \"CSS\", \"JS\"];\nfor (const lesson of lessons) {\n  console.log(lesson);\n}", practice: "Build a small script that loops through course names and reacts to user input.", reviewPoints: ["Prefer readable conditions.", "Extract repeated logic into functions.", "Check values with console output."], advancedTopics: ["control flow", "functions", "arrays", "DOM logic"] },
  TypeScript: { theme: "typed JavaScript design", foundation: "annotations, interfaces, typed functions, and safe object models", snippet: "interface Course {\n  title: string;\n  lessons: number;\n}\n\nconst course: Course = { title: \"TS\", lessons: 10 };", practice: "Type a course object and a helper function that returns progress.", reviewPoints: ["Use types where meaning matters.", "Model objects clearly.", "Handle optional values safely."], advancedTopics: ["interfaces", "strict mode", "typed modules", "union states"] },
  Python: { theme: "clean scripting and problem solving", foundation: "input, loops, conditions, functions, and data collections", snippet: "num1 = int(input(\"First: \"))\nnum2 = int(input(\"Second: \"))\nprint(num1 + num2)", practice: "Write three input-based programs and test them with different values.", reviewPoints: ["Watch indentation carefully.", "Convert input before calculation.", "Use functions to reduce repetition."], advancedTopics: ["input flow", "condition logic", "loops", "lists and dictionaries"] },
  Java: { theme: "structured object-oriented programming", foundation: "classes, methods, arrays, objects, and typed program design", snippet: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello Java\");\n  }\n}", practice: "Build a simple student record class with fields and methods.", reviewPoints: ["Keep braces and semicolons consistent.", "Match values to types.", "Separate methods by responsibility."], advancedTopics: ["class structure", "methods", "arrays", "object design"] },
  PHP: { theme: "server-side page logic", foundation: "variables, conditions, functions, form handling, and safe input processing", snippet: "<?php\n$name = \"Student\";\necho \"Hello $name\";\n?>", practice: "Create a small PHP form handler that validates one input and prints feedback.", reviewPoints: ["Use the dollar sign consistently.", "Validate and sanitize input.", "Keep form logic modular."], advancedTopics: ["request handling", "output flow", "functions", "input safety"] },
  Ruby: { theme: "expressive scripting and objects", foundation: "methods, arrays, interpolation, classes, and readable naming", snippet: "name = \"Ruby\"\nputs \"Learning #{name}\"", practice: "Write a Ruby script that prints a learner report from variables and arrays.", reviewPoints: ["Use readable names.", "Keep methods small.", "Practice interpolation and loops."], advancedTopics: ["methods", "iteration", "strings", "class basics"] },
  Go: { theme: "explicit and reliable programming", foundation: "packages, functions, slices, variables, and error-aware flow", snippet: "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Hello Go\")\n}", practice: "Write a Go program that stores topics in a slice and prints them.", reviewPoints: ["Read package and import flow carefully.", "Keep functions focused.", "Handle errors explicitly."], advancedTopics: ["packages", "functions", "slices", "error handling"] },
  NodeJS: { theme: "backend JavaScript runtime work", foundation: "modules, servers, routes, async tasks, and configuration", snippet: "const http = require(\"http\");\nconst server = http.createServer((req, res) => {\n  res.end(\"Hello Node\");\n});", practice: "Create a tiny Node server and explain request and response flow.", reviewPoints: ["Know built-in versus installed modules.", "Keep routes small.", "Use async patterns clearly."], advancedTopics: ["modules", "HTTP server", "Express routes", "async workflow"] },
  SQL: { theme: "data querying and table thinking", foundation: "selecting, filtering, sorting, inserting, updating, and deleting safely", snippet: "SELECT name, score\nFROM students\nWHERE score >= 80\nORDER BY score DESC;", practice: "Write a set of queries for a learner dashboard database.", reviewPoints: ["Use WHERE intentionally.", "Select only needed columns.", "Preview data before deleting or updating."], advancedTopics: ["query flow", "sorting", "data changes", "table design"] },
  C: { theme: "low-level procedural programming", foundation: "headers, functions, arrays, memory basics, and disciplined debugging", snippet: "#include <stdio.h>\n\nint main() {\n  printf(\"Hello C\\n\");\n  return 0;\n}", practice: "Write a C program with variables, a function, and a loop over an array.", reviewPoints: ["Initialize variables.", "Check indexes carefully.", "Use print statements while debugging."], advancedTopics: ["program skeleton", "functions", "arrays", "memory basics"] },
  "C++": { theme: "modern systems programming with classes", foundation: "streams, classes, containers, references, and const correctness", snippet: "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello C++\" << endl;\n}", practice: "Create a simple class and print values using streams and helper methods.", reviewPoints: ["Use clear function signatures.", "Prefer const correctness.", "Review ownership and references."], advancedTopics: ["streams", "classes", "vectors", "references"] },
  "C#": { theme: "typed application development", foundation: "classes, properties, methods, console apps, and async-friendly structure", snippet: "using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine(\"Hello C#\");\n  }\n}", practice: "Build a console app with a class, properties, and one helper method.", reviewPoints: ["Follow naming conventions.", "Use properties for object data.", "Keep methods clear and typed."], advancedTopics: ["console apps", "properties", "methods", "async mindset"] },
  Bash: { theme: "command-line automation", foundation: "variables, quoting, conditions, loops, functions, and safe script habits", snippet: "#!/bin/bash\nname=\"Student\"\necho \"Hello $name\"", practice: "Write a script that loops over topics and prints a progress line for each one.", reviewPoints: ["Quote variables safely.", "Preview values before risky commands.", "Use loops instead of repeating commands manually."], advancedTopics: ["script setup", "variables", "loops", "safe scripting"] },
};

const deepDiveStages = [
  "Core concept review",
  "Syntax walkthrough",
  "Pattern recognition",
  "Guided example",
  "Hands-on practice",
  "Common mistakes",
  "Debug checklist",
  "Mini challenge",
  "Applied exercise",
  "Revision drill",
  "Comparison notes",
  "Memory helper",
  "Real workflow",
  "Project planning",
  "Code reading task",
  "Self-test prompt",
  "Reflection notes",
  "Interview prep",
  "Problem solving lens",
  "Refactor exercise",
  "Confidence check",
  "Next-step roadmap",
];

function buildDeepDiveNotes(course: string, kit: NoteKit) {
  return deepDiveStages
    .map((stage, index) => {
      const topic = kit.advancedTopics[index % kit.advancedTopics.length];
      return `
<h4>${course} Extended Notes ${index + 1}: ${stage}</h4>
<p>This module focuses on ${kit.theme} through the lens of ${topic}. Keep the main foundation in mind: ${kit.foundation}.</p>
<p>Read the example, explain what each line is doing, and then rewrite it with your own values so the topic becomes active knowledge.</p>
<pre>
${kit.snippet}
</pre>
<p><b>Study checklist</b></p>
<ul>
${kit.reviewPoints.map((point) => `<li>${point}</li>`).join("\n")}
<li>Connect this stage to ${topic} and explain why it matters in a real workflow.</li>
</ul>
<p><b>Practice task:</b> ${kit.practice}</p>
<p><b>Checkpoint:</b> After this stage, the learner should be able to explain ${topic} in simple words without copying the notes directly.</p>
`;
    })
    .join("");
}

export const courseNotes: Record<string, string> = Object.fromEntries(
  Object.entries(baseCourseNotes).map(([course, note]) => [
    course,
    `${note}${buildDeepDiveNotes(course, courseNoteKits[course])}`,
  ]),
);

export const videos: Record<string, string> = {
  "HTML": "https://www.youtube.com/embed/HcOc7P5BMi4",
  "CSS": "https://www.youtube.com/embed/ESnrn1kAD4E",
  "JavaScript": "https://www.youtube.com/embed/ajdRvxDWH4w",
  "TypeScript": "https://www.youtube.com/embed/BwuLxPH8IDs",
  "Python": "https://www.youtube.com/embed/rfscVS0vtbw",
  "Java": "https://www.youtube.com/embed/eIrMbAQSU34",
  "PHP": "https://www.youtube.com/embed/OK_JCtrrv-c",
  "Ruby": "https://www.youtube.com/embed/t_ispmWmdjY",
  "Go": "https://www.youtube.com/embed/YS4e4q9oBaU",
  "NodeJS": "https://www.youtube.com/embed/TlB_eWDSMt4",
  "SQL": "https://www.youtube.com/embed/HXV3zeQKqGY",
  "C": "https://www.youtube.com/embed/KJgsSFOSQv0",
  "C++": "https://www.youtube.com/embed/vLnPwxZdW4Y",
  "C#": "https://www.youtube.com/embed/GhQdlIFylQ8",
  "Bash": "https://www.youtube.com/embed/tK9Oc6AEnR4"
};

export const courseNames = Object.keys(videos);

export type QuizQuestion = {
  course: string;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
};

type QuizSeed = Omit<QuizQuestion, "course">;

const quizBank: Record<string, QuizSeed[]> = {
  HTML: [
    { prompt: "Which HTML tag is used to create a hyperlink?", options: ["<p>", "<a>", "<img>", "<link>"], answer: "<a>", explanation: "The anchor tag `<a>` creates hyperlinks." },
    { prompt: "Which tag contains the visible content of a webpage?", options: ["<head>", "<meta>", "<body>", "<title>"], answer: "<body>", explanation: "The `<body>` tag contains the page content shown in the browser." },
    { prompt: "Which tag is used for the largest heading by default?", options: ["<h6>", "<heading>", "<h1>", "<header>"], answer: "<h1>", explanation: "`<h1>` is the main heading tag." },
    { prompt: "Which attribute gives alternative text for an image?", options: ["title", "src", "alt", "href"], answer: "alt", explanation: "The `alt` attribute describes the image for accessibility and fallback use." },
    { prompt: "Which tag is used to create a paragraph?", options: ["<p>", "<para>", "<text>", "<section>"], answer: "<p>", explanation: "Paragraphs are created with the `<p>` tag." },
    { prompt: "Which tag is commonly used for list items?", options: ["<li>", "<ol>", "<ul>", "<dl>"], answer: "<li>", explanation: "Each list item uses the `<li>` tag." },
    { prompt: "Which HTML tag is used to build a form?", options: ["<input>", "<fieldset>", "<form>", "<label>"], answer: "<form>", explanation: "The `<form>` tag wraps user-input controls." },
    { prompt: "Which tag sets the page title shown in the browser tab?", options: ["<meta>", "<title>", "<head>", "<caption>"], answer: "<title>", explanation: "The `<title>` tag defines the browser tab title." },
    { prompt: "Which element is used to insert an image?", options: ["<picture>", "<img>", "<src>", "<media>"], answer: "<img>", explanation: "Images are inserted with the `<img>` element." },
    { prompt: "Which section usually stores meta information and linked resources?", options: ["<body>", "<footer>", "<head>", "<main>"], answer: "<head>", explanation: "The `<head>` section holds metadata and linked resources." },
  ],
  CSS: [
    { prompt: "Which CSS property changes text color?", options: ["font-style", "text-color", "color", "foreground"], answer: "color", explanation: "The `color` property sets text color." },
    { prompt: "Which CSS property changes the background of an element?", options: ["fill", "background", "color", "backdrop"], answer: "background", explanation: "`background` controls the background styling." },
    { prompt: "Which selector targets an element with class `box`?", options: ["#box", ".box", "box", "*box"], answer: ".box", explanation: "A period selects a class in CSS." },
    { prompt: "Which layout model uses `justify-content` and `align-items` together?", options: ["Grid only", "Flexbox", "Float", "Positioning"], answer: "Flexbox", explanation: "Flexbox commonly uses both properties for alignment." },
    { prompt: "Which property changes font size?", options: ["font-style", "text-size", "font-size", "size"], answer: "font-size", explanation: "`font-size` controls the size of text." },
    { prompt: "How do you link an external CSS file in HTML?", options: ["<style src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<css href='style.css'>", "<script src='style.css'>"], answer: "<link rel='stylesheet' href='style.css'>", explanation: "External stylesheets are linked using the `<link>` tag." },
    { prompt: "Which property is used to make elements appear side by side in a flex container?", options: ["display: block", "display: flex", "position: absolute", "float: center"], answer: "display: flex", explanation: "Setting `display: flex` activates flex layout." },
    { prompt: "Which CSS property controls the inside spacing of an element?", options: ["margin", "padding", "gap", "border"], answer: "padding", explanation: "`padding` controls the inside spacing between content and border." },
    { prompt: "Which property controls the outside spacing around an element?", options: ["margin", "padding", "outline", "gap"], answer: "margin", explanation: "`margin` controls outside spacing." },
    { prompt: "Which unit is relative to the root font size?", options: ["px", "em", "rem", "%"], answer: "rem", explanation: "`rem` is relative to the root element font size." },
  ],
  JavaScript: [
    { prompt: "Which keyword is best when a variable should not be reassigned?", options: ["var", "const", "let", "fixed"], answer: "const", explanation: "`const` creates a binding that cannot be reassigned." },
    { prompt: "Which method prints output to the browser console?", options: ["print()", "echo()", "console.log()", "write()"], answer: "console.log()", explanation: "`console.log()` prints values to the console." },
    { prompt: "Which keyword declares a block-scoped variable?", options: ["var", "let", "dim", "new"], answer: "let", explanation: "`let` creates a block-scoped variable." },
    { prompt: "Which loop repeats code a fixed number of times?", options: ["if", "for", "switch", "try"], answer: "for", explanation: "`for` loops are used when iteration count is controlled." },
    { prompt: "What data type is `true` in JavaScript?", options: ["String", "Boolean", "Object", "Number"], answer: "Boolean", explanation: "`true` and `false` are Boolean values." },
    { prompt: "Which method accesses an element by its id from the DOM?", options: ["document.query()", "document.getElementById()", "window.find()", "node.select()"], answer: "document.getElementById()", explanation: "That method returns the element with the matching id." },
    { prompt: "Which symbol is commonly used for comments in a single JavaScript line?", options: ["<!-- -->", "#", "//", "%%"], answer: "//", explanation: "`//` starts a single-line comment in JavaScript." },
    { prompt: "Which data type is created by square brackets `[]`?", options: ["Object", "Array", "String", "Boolean"], answer: "Array", explanation: "Square brackets create arrays in JavaScript." },
    { prompt: "Which statement is used to define a function?", options: ["method", "function", "define", "task"], answer: "function", explanation: "The `function` keyword declares a function." },
    { prompt: "Which comparison operator checks value and type equality?", options: ["=", "==", "===", "!="], answer: "===", explanation: "`===` checks both value and type." },
  ],
  TypeScript: [
    { prompt: "What does TypeScript add to JavaScript?", options: ["Compiled HTML", "Static typing", "Database storage", "CSS scoping"], answer: "Static typing", explanation: "TypeScript builds on JavaScript by adding static types." },
    { prompt: "Which syntax defines a variable as a string in TypeScript?", options: ["let name = string", "let name: string", "string name =", "name :: string"], answer: "let name: string", explanation: "Type annotations come after a colon." },
    { prompt: "Which TypeScript feature describes the shape of an object?", options: ["loop", "interface", "import", "package"], answer: "interface", explanation: "Interfaces define expected object structure." },
    { prompt: "What is the type annotation for a number?", options: ["int", "float", "number", "numeric"], answer: "number", explanation: "TypeScript uses `number` for numeric values." },
    { prompt: "Which TypeScript setting increases strict type checking?", options: ["strict", "typed", "checked", "forceTypes"], answer: "strict", explanation: "The `strict` option enables stronger type checking rules." },
    { prompt: "What is TypeScript code usually converted into before running in the browser?", options: ["Java", "CSS", "JavaScript", "HTML"], answer: "JavaScript", explanation: "TypeScript is transpiled to JavaScript." },
    { prompt: "Which keyword exports a value from a TypeScript module?", options: ["share", "send", "export", "public"], answer: "export", explanation: "`export` makes code available to other modules." },
    { prompt: "Which type annotation would you use for a true/false value?", options: ["flag", "bool", "boolean", "binary"], answer: "boolean", explanation: "TypeScript uses `boolean` for true/false values." },
    { prompt: "Which type is suitable for an ordered list of strings?", options: ["string[]", "array<string>", "list", "text[] only"], answer: "string[]", explanation: "`string[]` is a common array-of-strings type annotation." },
    { prompt: "Why are interfaces useful in TypeScript?", options: ["They style pages", "They define object structure", "They replace loops", "They compile HTML"], answer: "They define object structure", explanation: "Interfaces help describe expected object shapes." },
  ],
  Python: [
    { prompt: "Which keyword defines a function in Python?", options: ["function", "def", "func", "define"], answer: "def", explanation: "Python uses `def` to define functions." },
    { prompt: "Which function prints output in Python?", options: ["echo()", "print()", "console.log()", "write()"], answer: "print()", explanation: "`print()` writes output to the console." },
    { prompt: "Which statement checks a condition in Python?", options: ["for", "if", "loop", "switch"], answer: "if", explanation: "`if` is used for conditional logic." },
    { prompt: "What does `range(5)` commonly produce in a loop?", options: ["1 to 5", "0 to 5", "0 to 4", "5 only"], answer: "0 to 4", explanation: "`range(5)` yields 0,1,2,3,4." },
    { prompt: "Which symbol starts a comment in Python?", options: ["//", "#", "<!--", "%%"], answer: "#", explanation: "Single-line Python comments start with `#`." },
    { prompt: "Which built-in function reads user input as a string?", options: ["read()", "scan()", "prompt()", "input()"], answer: "input()", explanation: "`input()` reads a line of user input." },
    { prompt: "What is required for Python blocks like functions and loops?", options: ["Semicolons", "Indentation", "Curly braces", "XML tags"], answer: "Indentation", explanation: "Python uses indentation to define blocks." },
    { prompt: "Which keyword starts a loop over a sequence in Python?", options: ["for", "foreach", "loop", "iterate"], answer: "for", explanation: "Python commonly uses `for` to iterate over sequences." },
    { prompt: "What is the result type of `int(input())` when valid input is entered?", options: ["String", "Integer", "Boolean", "List"], answer: "Integer", explanation: "`int()` converts the input string into an integer." },
    { prompt: "Which collection uses square brackets in Python?", options: ["Tuple", "Dictionary", "List", "Set only"], answer: "List", explanation: "Lists are written with square brackets." },
  ],
  Java: [
    { prompt: "Which method is the entry point of a Java program?", options: ["start()", "run()", "main()", "init()"], answer: "main()", explanation: "Java starts from the `main()` method." },
    { prompt: "Which keyword creates a class in Java?", options: ["class", "object", "struct", "module"], answer: "class", explanation: "Classes are declared with the `class` keyword." },
    { prompt: "Which class is commonly used for console output?", options: ["Console", "System.out", "Output", "Print"], answer: "System.out", explanation: "`System.out.println()` is the standard console output pattern." },
    { prompt: "Which data type stores whole numbers in Java?", options: ["string", "double", "int", "bool"], answer: "int", explanation: "`int` stores integer values." },
    { prompt: "Which keyword creates a new object instance?", options: ["make", "new", "create", "build"], answer: "new", explanation: "`new` constructs an object." },
    { prompt: "Which keyword is used before a method that belongs to the class rather than an object?", options: ["global", "public", "static", "fixed"], answer: "static", explanation: "`static` marks members tied to the class." },
    { prompt: "Java is primarily known as which type of language?", options: ["Markup", "Object-oriented", "Stylesheet", "Query"], answer: "Object-oriented", explanation: "Java is widely taught as an object-oriented language." },
    { prompt: "Which statement prints text followed by a new line in Java?", options: ["System.out.println()", "print()", "echo()", "Console.WriteLine()"], answer: "System.out.println()", explanation: "That is the standard Java output call." },
    { prompt: "Which type stores decimal values in Java?", options: ["int", "double", "char", "bool"], answer: "double", explanation: "`double` stores decimal numbers." },
    { prompt: "Which pair of symbols encloses a Java array initializer?", options: ["()", "[]", "{}", "<>"], answer: "{}", explanation: "Java array initializers commonly use curly braces." },
  ],
  PHP: [
    { prompt: "Which symbol is used before a PHP variable name?", options: ["#", "$", "@", "%"], answer: "$", explanation: "PHP variables start with `$`." },
    { prompt: "Which tag opens a PHP block?", options: ["<php>", "<?php", "<script php>", "<?"], answer: "<?php", explanation: "Standard PHP code begins with `<?php`." },
    { prompt: "Which command prints output in PHP?", options: ["echo", "console.log", "puts", "printline"], answer: "echo", explanation: "`echo` outputs text in PHP." },
    { prompt: "PHP is commonly used on which side of web development?", options: ["Client side only", "Server side", "Design side", "Database side only"], answer: "Server side", explanation: "PHP is a server-side scripting language." },
    { prompt: "Which function grouping practice improves PHP code organization?", options: ["More globals", "Keeping code modular with functions", "Avoiding variables", "Using only HTML"], answer: "Keeping code modular with functions", explanation: "Functions help organize PHP code." },
    { prompt: "Why should user input be sanitized in PHP?", options: ["To change the font", "To improve security", "To make arrays shorter", "To remove loops"], answer: "To improve security", explanation: "Sanitizing input helps reduce security issues." },
    { prompt: "Which statement is used for conditions in PHP?", options: ["if", "when", "check", "cond"], answer: "if", explanation: "PHP uses `if` for conditional logic." },
    { prompt: "Which symbol ends most PHP statements?", options: [".", ";", ":", ","], answer: ";", explanation: "PHP statements usually end with a semicolon." },
    { prompt: "Which language is PHP commonly embedded into for web pages?", options: ["SQL", "HTML", "CSS", "Bash"], answer: "HTML", explanation: "PHP is commonly embedded in HTML pages." },
    { prompt: "Which of these is a valid PHP variable name style?", options: ["name", "$name", "@name", "#name"], answer: "$name", explanation: "PHP variable names begin with `$`." },
  ],
  Ruby: [
    { prompt: "Which command prints output in Ruby?", options: ["console.log", "echo", "puts", "printline"], answer: "puts", explanation: "`puts` is a common Ruby output command." },
    { prompt: "Which keyword defines a method in Ruby?", options: ["function", "method", "def", "func"], answer: "def", explanation: "Ruby methods are defined with `def`." },
    { prompt: "Ruby is commonly described as what kind of language?", options: ["Dynamic and object-oriented", "Markup", "Compiled stylesheet", "Query language"], answer: "Dynamic and object-oriented", explanation: "Ruby is known for being dynamic and object-oriented." },
    { prompt: "Which syntax inserts a variable inside a double-quoted Ruby string?", options: ["${name}", "#{name}", "{{name}}", "%name"], answer: "#{name}", explanation: "Ruby string interpolation uses `#{...}`." },
    { prompt: "Which structure holds an ordered collection in Ruby?", options: ["table", "array", "query", "sheet"], answer: "array", explanation: "Arrays store ordered collections of values." },
    { prompt: "Which Ruby practice is recommended in the notes?", options: ["Long methods", "Meaningful variable names", "Avoid methods", "Only global variables"], answer: "Meaningful variable names", explanation: "Good naming improves code readability." },
    { prompt: "What does `puts fruits[0]` do?", options: ["Deletes the first item", "Prints the first item", "Sorts the array", "Adds a new item"], answer: "Prints the first item", explanation: "`fruits[0]` accesses the first array element and `puts` prints it." },
    { prompt: "Which brackets are used to create an array in Ruby?", options: ["()", "[]", "{}", "<>"], answer: "[]", explanation: "Ruby arrays are typically written with square brackets." },
    { prompt: "Ruby methods are commonly kept how, according to the notes?", options: ["Very long", "Short and focused", "Without names", "Only recursive"], answer: "Short and focused", explanation: "Short methods are easier to understand and maintain." },
    { prompt: "Which type of string allows interpolation with `#{}` in Ruby?", options: ["Single-quoted", "Double-quoted", "Comment string", "Numeric string"], answer: "Double-quoted", explanation: "Interpolation works in double-quoted Ruby strings." },
  ],
  Go: [
    { prompt: "Which package is commonly imported for printing in Go?", options: ["print", "io", "fmt", "output"], answer: "fmt", explanation: "The `fmt` package handles formatted I/O." },
    { prompt: "Which keyword defines a function in Go?", options: ["function", "def", "func", "fn"], answer: "func", explanation: "Go uses `func` to declare functions." },
    { prompt: "Which symbol is often used for short variable declaration in Go?", options: ["=>", "::", ":=", "=="], answer: ":=", explanation: "`:=` is used for short declarations inside functions." },
    { prompt: "Which keyword starts a package declaration in Go?", options: ["package", "module", "namespace", "import"], answer: "package", explanation: "Every Go file begins with a package declaration." },
    { prompt: "What is the entry point function name in a Go executable program?", options: ["start", "main", "run", "boot"], answer: "main", explanation: "Go programs start in `main()`." },
    { prompt: "Which Go best practice is mentioned in the notes?", options: ["Hide all errors", "Handle errors explicitly", "Avoid formatting", "Use global variables"], answer: "Handle errors explicitly", explanation: "Go encourages explicit error handling." },
    { prompt: "Which data structure is shown in the notes for a flexible list?", options: ["Slice", "Pointer", "Struct tag", "Channel"], answer: "Slice", explanation: "Slices are dynamic views over arrays in Go." },
    { prompt: "Which keyword imports a package in Go?", options: ["include", "import", "using", "require"], answer: "import", explanation: "Go uses the `import` keyword." },
    { prompt: "Which symbol pair encloses the parameters of a Go function?", options: ["[]", "()", "{}", "<>"], answer: "()", explanation: "Function parameters are written inside parentheses." },
    { prompt: "Which package and function combination prints a line in the sample Go code?", options: ["io.Write", "fmt.Println", "print.Line", "system.out"], answer: "fmt.Println", explanation: "`fmt.Println` prints output followed by a newline." },
  ],
  NodeJS: [
    { prompt: "NodeJS is primarily known as what?", options: ["A browser", "A CSS framework", "A JavaScript runtime", "A database"], answer: "A JavaScript runtime", explanation: "NodeJS runs JavaScript outside the browser." },
    { prompt: "Which built-in module is used in the notes to create a basic server?", options: ["http", "fs", "os", "url"], answer: "http", explanation: "The sample server uses the `http` module." },
    { prompt: "Which framework is shown in the notes for building a simple web app?", options: ["Django", "Laravel", "Express", "Rails"], answer: "Express", explanation: "Express is the NodeJS framework shown in the notes." },
    { prompt: "Which style is recommended over callbacks in the notes?", options: ["Promises only", "async/await", "Nested loops", "Global variables"], answer: "async/await", explanation: "The notes recommend `async/await` for cleaner async flow." },
    { prompt: "What does `server.listen(3000)` do?", options: ["Stops the server", "Starts listening on port 3000", "Saves a file", "Deletes a route"], answer: "Starts listening on port 3000", explanation: "That call binds the server to port 3000." },
    { prompt: "Which function logs output in NodeJS?", options: ["echo()", "console.log()", "puts()", "output()"], answer: "console.log()", explanation: "NodeJS commonly uses `console.log()`." },
    { prompt: "Environment variables are recommended in NodeJS mainly for what?", options: ["Styling pages", "Storing configuration safely", "Creating loops", "Replacing arrays"], answer: "Storing configuration safely", explanation: "Environment variables are commonly used for configuration and secrets." },
    { prompt: "Which keyword loads a module in the CommonJS example shown in the notes?", options: ["require", "import", "load", "include"], answer: "require", explanation: "The notes show `require()` in the NodeJS examples." },
    { prompt: "What does `res.end()` do in the sample HTTP server?", options: ["Ends the server forever", "Sends the response and ends it", "Deletes a route", "Starts Express"], answer: "Sends the response and ends it", explanation: "`res.end()` finalizes the response to the client." },
    { prompt: "Express route handlers commonly receive which two objects?", options: ["data and cache", "req and res", "in and out", "node and app"], answer: "req and res", explanation: "Express handlers typically use request and response objects." },
  ],
  SQL: [
    { prompt: "Which SQL command is used to retrieve data?", options: ["GET", "SELECT", "FETCHROW", "OPEN"], answer: "SELECT", explanation: "`SELECT` retrieves data from tables." },
    { prompt: "Which clause filters rows in SQL?", options: ["ORDER BY", "WHERE", "GROUP", "LIMIT"], answer: "WHERE", explanation: "`WHERE` filters which rows are returned or changed." },
    { prompt: "Which command inserts new data into a table?", options: ["ADD", "CREATE", "INSERT", "PUT"], answer: "INSERT", explanation: "`INSERT` adds new rows." },
    { prompt: "Which command modifies existing rows?", options: ["UPDATE", "EDIT", "MODIFY", "CHANGE"], answer: "UPDATE", explanation: "`UPDATE` changes existing data." },
    { prompt: "Which command removes rows from a table?", options: ["DROP", "DELETE", "REMOVE", "ERASE"], answer: "DELETE", explanation: "`DELETE` removes rows." },
    { prompt: "Why is using `WHERE` important in `UPDATE` and `DELETE` statements?", options: ["It changes fonts", "It limits affected rows", "It renames tables", "It creates indexes"], answer: "It limits affected rows", explanation: "`WHERE` prevents accidentally affecting every row." },
    { prompt: "What is one benefit of database normalization?", options: ["More duplicated data", "Cleaner structure with less redundancy", "Bigger fonts", "Faster HTML"], answer: "Cleaner structure with less redundancy", explanation: "Normalization reduces unnecessary duplication and improves structure." },
    { prompt: "Which clause is used to sort query results?", options: ["GROUP BY", "ORDER BY", "SORT", "ARRANGE"], answer: "ORDER BY", explanation: "`ORDER BY` sorts the result set." },
    { prompt: "Which keyword is commonly used to add rows to a table?", options: ["INSERT", "PUSH", "APPEND", "WRITE"], answer: "INSERT", explanation: "`INSERT` adds data into a table." },
    { prompt: "What does `SELECT *` mean?", options: ["Select one row", "Select all columns", "Delete everything", "Sort all rows"], answer: "Select all columns", explanation: "The asterisk means all columns in the selected table." },
  ],
  C: [
    { prompt: "Which header file is commonly used for `printf` in C?", options: ["<conio.h>", "<stdio.h>", "<stdlib.h>", "<math.h>"], answer: "<stdio.h>", explanation: "`printf` is declared in `<stdio.h>`." },
    { prompt: "Which function is the entry point in a basic C program?", options: ["start()", "main()", "run()", "init()"], answer: "main()", explanation: "C programs begin in `main()`." },
    { prompt: "Which data type stores decimal values in the notes?", options: ["char", "int", "float", "bool"], answer: "float", explanation: "`float` stores decimal numbers in the example." },
    { prompt: "Which symbol ends a C statement?", options: [".", ";", ":", ","], answer: ";", explanation: "Most C statements end with a semicolon." },
    { prompt: "What does `return 0;` commonly indicate from `main()`?", options: ["An error", "Successful completion", "A loop", "A class"], answer: "Successful completion", explanation: "Returning 0 usually signals successful execution." },
    { prompt: "Which best practice is mentioned for C variables?", options: ["Leave them uninitialized", "Always initialize variables", "Use HTML tags", "Avoid functions"], answer: "Always initialize variables", explanation: "Initializing variables helps avoid undefined behavior." },
    { prompt: "Why should dynamically allocated memory be freed in C?", options: ["To change output color", "To avoid memory leaks", "To create arrays", "To sort numbers"], answer: "To avoid memory leaks", explanation: "Freed memory prevents unnecessary memory leaks." },
    { prompt: "Which data type stores a single character in C?", options: ["char", "string", "text", "letter"], answer: "char", explanation: "`char` is used for a single character." },
    { prompt: "Which operator gets the value stored at an array index like `numbers[0]`?", options: ["Dot access", "Bracket indexing", "Arrow access", "Pipe access"], answer: "Bracket indexing", explanation: "C arrays use square-bracket indexing." },
    { prompt: "Which function is commonly used for formatted output in C?", options: ["echo", "puts only", "printf", "println"], answer: "printf", explanation: "`printf` prints formatted output." },
  ],
  "C++": [
    { prompt: "Which stream is commonly used for standard output in C++?", options: ["printf", "stdout", "cout", "scan"], answer: "cout", explanation: "`cout` is the standard output stream in C++." },
    { prompt: "Which header is commonly included for `cout`?", options: ["<stdio.h>", "<iostream>", "<stream.h>", "<print.h>"], answer: "<iostream>", explanation: "`<iostream>` provides `cout` and `endl`." },
    { prompt: "Which keyword is often used to define a class in C++?", options: ["class", "object", "struct only", "type"], answer: "class", explanation: "Classes are commonly declared with `class`." },
    { prompt: "What does `endl` commonly do?", options: ["Ends a program", "Adds a newline", "Creates a loop", "Deletes output"], answer: "Adds a newline", explanation: "`endl` inserts a newline and flushes the stream." },
    { prompt: "Which best practice is mentioned in the notes?", options: ["Prefer const correctness", "Avoid references", "Use only global variables", "Never use classes"], answer: "Prefer const correctness", explanation: "Const correctness improves safety and clarity." },
    { prompt: "Why are smart pointers recommended?", options: ["They make fonts larger", "They help manage memory safely", "They replace all classes", "They create SQL queries"], answer: "They help manage memory safely", explanation: "Smart pointers help automate memory management." },
    { prompt: "What is a reference in C++ often used for?", options: ["Styling output", "Passing objects efficiently", "Replacing loops", "Creating HTML"], answer: "Passing objects efficiently", explanation: "References allow efficient access without copying." },
    { prompt: "Which keyword can restrict modification of a value in C++?", options: ["let", "const", "fixed", "static only"], answer: "const", explanation: "`const` marks values that should not be modified." },
    { prompt: "Which operator is used with `cout` to send output?", options: ["<<", ">>", "=>", "::"], answer: "<<", explanation: "`cout << value` sends output to the stream." },
    { prompt: "Which object-oriented feature is highlighted by creating a class like `Person`?", options: ["Encapsulation", "Routing", "Styling", "Normalization"], answer: "Encapsulation", explanation: "Classes group data and behavior, showing encapsulation." },
  ],
  "C#": [
    { prompt: "Which class is commonly used to print output in C#?", options: ["System.Print", "Console", "Output", "WriteLine"], answer: "Console", explanation: "C# uses `Console.WriteLine()` for console output." },
    { prompt: "Which keyword defines a class in C#?", options: ["class", "type", "object", "struct"], answer: "class", explanation: "Classes are declared using `class`." },
    { prompt: "Which data type stores `true` or `false` in C#?", options: ["bool", "bit", "flag", "binary"], answer: "bool", explanation: "`bool` stores Boolean values." },
    { prompt: "What is recommended for I/O operations in the notes?", options: ["Nested callbacks", "async/await", "Only loops", "Manual threads only"], answer: "async/await", explanation: "The notes recommend `async/await` for I/O." },
    { prompt: "Which C# member style is recommended instead of plain public fields?", options: ["Properties", "Comments", "Scripts", "Tables"], answer: "Properties", explanation: "Properties are preferred for class data exposure." },
    { prompt: "Which method name starts a basic console app in the notes?", options: ["Run", "Start", "Main", "Open"], answer: "Main", explanation: "The sample application starts with `Main`." },
    { prompt: "C# is developed by which company?", options: ["Google", "Microsoft", "Oracle", "Adobe"], answer: "Microsoft", explanation: "C# was developed by Microsoft." },
    { prompt: "Which method is commonly used to print a line in C#?", options: ["Console.Log()", "Console.WriteLine()", "Print.Line()", "System.out.println()"], answer: "Console.WriteLine()", explanation: "That is the common C# console output method." },
    { prompt: "Which keyword commonly declares a value type for whole numbers in C#?", options: ["number", "int", "integer", "digit"], answer: "int", explanation: "`int` stores whole numbers." },
    { prompt: "Which syntax element is shown for auto-properties in C#?", options: ["{ get; set; }", "[get,set]", "(get,set)", "<get,set>"], answer: "{ get; set; }", explanation: "Auto-properties commonly use `{ get; set; }`." },
  ],
  Bash: [
    { prompt: "Which command is commonly used to print text in Bash?", options: ["print", "puts", "echo", "write"], answer: "echo", explanation: "`echo` prints text to the terminal in Bash." },
    { prompt: "Which line is commonly used as a shebang for Bash scripts?", options: ["#!/bin/bash", "#bash", "<bash>", "run bash"], answer: "#!/bin/bash", explanation: "That shebang tells the system to use Bash." },
    { prompt: "How do you reference a variable named `name` in Bash?", options: ["name", "%name", "$name", "@name"], answer: "$name", explanation: "Bash variables are accessed with a `$` prefix." },
    { prompt: "Which keyword begins a function body in the sample script?", options: ["function only", "greet() {", "def greet:", "fn greet"], answer: "greet() {", explanation: "That is a valid Bash function definition form." },
    { prompt: "Why is quoting variables often recommended in Bash?", options: ["For syntax coloring", "To handle spaces safely", "To increase speed always", "To remove loops"], answer: "To handle spaces safely", explanation: "Quoted variables reduce word-splitting issues." },
    { prompt: "Which structure is shown for looping through values in Bash?", options: ["for", "switch", "class", "import"], answer: "for", explanation: "The notes show a `for` loop for repetition." },
    { prompt: "Why should scripts be made executable?", options: ["To change the theme", "To allow direct execution", "To sort variables", "To create HTML"], answer: "To allow direct execution", explanation: "Executable permissions let the script run directly." },
    { prompt: "Which keyword is used in the sample conditional statement?", options: ["when", "if", "case only", "check"], answer: "if", explanation: "The sample Bash conditional begins with `if`." },
    { prompt: "What does `do` commonly mark in a Bash loop?", options: ["The end of the script", "The start of the loop body", "A variable", "A command separator only"], answer: "The start of the loop body", explanation: "`do` starts the body of a Bash loop." },
    { prompt: "Which command changes a script so it can be run directly?", options: ["chmod +x", "echo run", "apt bash", "touch"], answer: "chmod +x", explanation: "`chmod +x` makes a script executable." },
  ],
};

export const quizQuestions: QuizQuestion[] = Object.entries(quizBank).flatMap(([course, questions]) =>
  questions.map((question) => ({
    course,
    ...question,
  })),
);

export const categories = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript"],
  backend: ["Python", "Java", "PHP", "Ruby", "Go", "NodeJS", "SQL"],
  programming: ["C", "C++", "C#", "Go", "Python", "Java", "JavaScript", "TypeScript", "PHP"],
  database: ["SQL", "Bash"]
};
