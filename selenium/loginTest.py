from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.common.exceptions import NoSuchElementException
import unittest

class LoginTest(unittest.TestCase):


    def setUp(self):
        self.desired_capabilities = DesiredCapabilities.FIREFOX
        self.desired_capabilities['marionette'] = True
        self.options = webdriver.FirefoxOptions()
        self.options.add_argument("--headless")
        self.options.add_argument("--disable-gpu")
        self.options.add_argument("--use-fake-ui-for-media-stream")
        self.options.add_argument("--use-fake-device-for-media-stream")

        self.driver = webdriver.Firefox(options=self.options, capabilities=self.desired_capabilities)
        self.driver.implicitly_wait(30)
        self.base_url = "https://mansong.ff-demo.co.uk"
        self.verificationErrors = []
        self.accept_next_alert = True

    def test_homepage(self):
        driver = self.driver
        driver.get(self.base_url + "/")

        self.assertEqual("Gesture Recogniser", driver.title)
        self.assertTrue(self.is_element_present(By.XPATH, "//div[@id='root']/div/form/div"))


    def test_form(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element_by_xpath("//div[@id='root']/div/form/div").click()
        driver.find_element_by_xpath("//input[@placeholder='First Name']").send_keys("Harness")
        driver.find_element_by_xpath("//input[@placeholder='Last Name']").send_keys("Harness")
        driver.find_element_by_xpath("//input[@placeholder='Email']").send_keys("harness@harness.io")
        driver.find_element_by_xpath("//button[@type='submit']").click()

        # Check that the user is redirected to the gesturerecognition page
        self.assertEqual("https://mansong.ff-demo.co.uk/gesture-recognition", driver.current_url)

    def test_gesturerecognition_page(self):
        driver = self.driver
        driver.get(self.base_url + "/gesture-recognition")

        self.assertEqual("Gesture Recogniser", driver.title)
        # Check that the webcam is visible
        self.assertTrue(self.is_element_present(By.XPATH, "//*[@id='root']/div/header/video"))

    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException as e: return False
        return True

    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException as e: return False
        return True

    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True


    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()
