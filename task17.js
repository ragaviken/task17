    import org.openqa.selenium.By;
    import org.openqa.selenium.WebDriver;
    import org.openqa.selenium.WebElement;
    import org.openqa.selenium.chrome.ChromeDriver;
    import org.openqa.selenium.interactions.Actions;

    public class SnapdealLoginTest {
        public static void main(String[] args) {
            // Set the path for the ChromeDriver
            System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");

            // Initialize WebDriver
            WebDriver driver = new ChromeDriver();

            try {
                // Step 2: Navigate to the Snapdeal website
                driver.get("http://www.snapdeal.com");

                // Step 3: Move the cursor to the Sign In button and hold it
                Actions action = new Actions(driver);
                WebElement signInBtn = driver.findElement(By.xpath("//div[@class='accountInner']"));
                action.moveToElement(signInBtn).perform();

                // Step 4: Click on the Sign In button
                WebElement loginBtn = driver.findElement(By.xpath("//span[text()='Login']"));
                loginBtn.click();

                // Switch to the login frame
                WebElement loginFrame = driver.findElement(By.xpath("//iframe[contains(@id, 'loginIframe')]"));
                driver.switchTo().frame(loginFrame);

                // Step 5: Enter a valid Email Id in the Email Id field
                WebElement emailField = driver.findElement(By.id("userName"));
                emailField.sendKeys("your_valid_email@example.com");

                // Step 6: Click on the Continue button
                WebElement continueBtn = driver.findElement(By.id("checkUser"));
                continueBtn.click();

                // Step 7: Enter the valid password in the Password field
                WebElement passwordField = driver.findElement(By.id("j_password_login_uc"));
                passwordField.sendKeys("your_valid_password");

                // Step 8: Click on the Login button
                WebElement loginButton = driver.findElement(By.id("submitLoginUC"));
                loginButton.click();

                // Step 9: Verify that the user is logged in successfully
                driver.switchTo().defaultContent(); // Exit the iframe
                WebElement accountName = driver.findElement(By.className("accountInner"));

                if (accountName.getText().contains("Your Account Name")) {
                    System.out.println("Login successful!");
                } else {
                    System.out.println("Login failed!");
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                // Close the browser
                driver.quit();
            }
        }
    }

