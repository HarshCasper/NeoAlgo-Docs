# DOC GUIDELINE

While adding the articles, it would be preferred if you use the mdx file extension instead of md. mdx provides us to combine Markdown + React. 

## How to write an article for the website

1. All the problems written should necessarily include 6 sections
   1. ### Introduction about the algorithm/data structure
      Write a brief description of the data structure/algorithm you are writing about. Make sure what you are working on has to be easy to grasp and consume.

   2. ### Explanation about the Algorithm/Data Structure
      It is said that an easy explanation reflects your own understanding of the subject.
      *  Give an easy and concise explanation of the algorithm/data structure. 
      * This section should include atleast two examples, with atleast one example properly explained.

   3. ### Algorithmic Steps for implementation
      This is one of the most important section.
      * Always use bullets while writing the algorithmic steps. 
      * Donot write it as `STEP 1`, `STEP 2`
      * Make sure that the maximum number of characters in each line does not exceed 60
      * Use crisp and small statements

   4. ### Code (C++/Java and Python as of now)
       
     Using standard markdown won't be beneficial for us. We can use some React Code to make it possible. Don't fret out if you don't know React. Here is an official [documentation](https://docusaurus.io/docs/markdown-features/code-blocks#multi-language-support-code-blocks) that you can refer to format the Code in separate tabs.
     Follow the rules for writing code.
      
   5. ### Input-Output Samples (Atleast two)
      * This section should contain atleast two input/output samples.
      * Please be sure to write the input and output as they appear in the code sample included.
     
   6. ### Complexity analysis
       This section will include two points:
       * Time complexity
       * Space complexity
      You may include explanation of the time complexity and the space complexity. Again remember to use easy and crisp language.      
      
      
2. Formulae or any important point should be highlighted.

## GUIDELINES FOR THE CODE

At NeoAlgo, we highly recommend contributors to follow the guidelines strictly. We  understand that this might get overwhelming for beginners, hence wehave a more lenient styling guide for our project. We would like to clarify that this guideline is for this project only and other projects might differ from our styling rules.

We highly recommend using online code formatters to make it possible in a simple way. If a language has a standard code formatting guideline, like PEP8 for Python, we would like it to be followed as strictly as possible. Some of the standards that we have strictly in place are: 
1. Indentation: Use 4 spaces, never tabs for indentation. This is a strict rule and ignoring this can (has) cause(d) bugs.

2. Line Length: Limit all lines to a maximum of 79 characters. This rule is not strict but is still recommended as multiple popular projects stick to this rule.

3. Splitting Lines: For every line exceeding the limit, it is recommended to split lines using continuation inside parentheses, brackets, and braces.
Binary Operators: It's a common practice to break a line after a binary operator, although it is not recommended at all.
Naming Conventions: At NeoAlgo we are looking to have the following naming convention: 

   1. Class names : CamelCase, and capitalize acronyms, for example: ClassName and IEEEPaper not IeeePaper
   
   2. Variable names : lower_with_underscores, for example: postive_num
   
   3. Method and function names : lower_with_underscores, for example: sum_of_first_five
   
   4. Constants : UPPER_WITH_UNDERSCORES.
   
   5. It is a strict rule, not to use Capitalized_Words_With_Underscores as it looks bad.
   
   6. Contributors are hereby informed that using meaningless variable names (like l in place of len for length, a, s, d, etc will lead to a straight    rejection of the pull request).
   
   7. Never use the characters 'l' (lowercase letter L), 'O' (uppercase letter O), or 'I' (uppercase letter I) as single-character variable names. In some    fonts, they are not distinguishable.
   

4. Comments: Writing comments should be a common habit for everyone, they are helpful for writer, viewer, reviewer, and user. But comments that contradict the code are worse than no comments. The styling of comments is of utmost importance.

   1. Write as many comments as necessary, don't go overboard, but ensure to explain the much-needed parts.
   
   2. Use block comments for a long comment.
   
   3. Do write your comments in the proper English language.
   
   4. Follow proper indentations if writing comments in classes or methods.
   
   5. Comments should be written above the line of code not beside it. 

5. Paths: It is advised not to enter local paths at all in your code, this can lead to security vulnerabilities, rather use relative paths.
Imports: Imports should be on top of the file and it is recommended that the standard imports are at the top, then the libraries that the user installed. It is always recommended to follow an alphabetical scheme


# Asking for review

1. Submit the article for review after writing it.

2. The team will review your article and give you feedback for the article

3. Work upon the feedback and improve your article. Submit it again for further review.

4. We use Vercel for deployment . All the checks should pass Unless all the checks pass, create your PR as a draft.

5. If the checks are failing and you cannot debug it, let us know.

6. If all the required improvements have been made and the team approves your article, then your article will be published.
