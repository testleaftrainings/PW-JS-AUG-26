⚙ How to Integrate VS Code with Copilot & MCP Servers for Playwright Code Generation

Here’s how you can set it up step-by-step to make Copilot generate Playwright code in your preferred design pattern.

Step 1: Install Playwright

Open VS Code → Create a folder → Open the terminal and run:
npm init playwright@latest

Step 2: Configure MCP Server

Create a file named mcp.json and paste:
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}
This ensures your Playwright MCP server is ready to fire up whenever you need it.

Step 3: Prepare Your ICE Prompt File

Create a .txt file (say code-generate.md) and write your Instruction, Context, and Example (ICE).

******************************************************************************************************************************

Follow below ICE pot method to write your perfect prompt :

ICE
----

Instruction
-----------
1. Generate playwright typescript code for leaftaps application in creating a lead using Page Object Model, create separate folder for tests and pages.
2. Add comments for every step.
3. Follow coding best practices.
4. Create test files under "tests" and page files under "pages".
5. Data credentials: username = demosalesmanager, password = crmsfa.
6. Remaining test input data should use first name= Ravi, last name = R, company name=testleaf.
7. Compile and run after generation.
8. Debug for failures post-run.
9. Show test report at the end.

Context
--------
You are an AI assistant generating Playwright TypeScript code for the LeaFtaps application.

Example
-------
import test from "playwright/test";
test("Login page ", async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("DemoSalesManager")
    await page.fill("#password", "crmsfa")
    await page.click(".decorativeSubmit")
    await page.click(`text='CRM/SFA'`)
    const pageTitle = await page.title()
    console.log(pageTitle)
    await page.waitForTimeout(5000)
})

******************************************************************************************************************************

Step 4: Install GitHub Copilot
Click the Extensions icon (or press Ctrl+Shift+X).
Search and install GitHub Copilot and GitHub Copilot Chat.

Step 5: Sign in to GitHub
Click Accounts (bottom-right of VS Code).
Select “Sign in with GitHub to use GitHub Copilot.”
Complete the authentication in your browser.

Step 6: Use Copilot with MCP
Click the Copilot icon (top-right of VS Code).

Switch mode from Chat to Agent.

Attach your code-generate.md file using the pin icon.

In the Add context(#) box, type: "Generate code"

Hit enter — watch your Playwright POM structure appear like magic.