from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver import ActionChains

class aplcation:
    def __init__(self):
        self.config()
        self.plataforma()
        self.login()
        self.notas()

    def config(self):
        self.options = webdriver.ChromeOptions()
        self.options.add_experimental_option('detach', True)

    def plataforma(self):
        self.service = Service(ChromeDriverManager().install())
        self.browser = webdriver.Chrome(options = self.options, service=self.service)
        self.browser.get("https://sigaa.ifrj.edu.br/sigaa/verTelaLogin.do")
        self.browser.maximize_window()

    def login(self):
        self.aluno = self.browser.find_element(By.XPATH, '//*[@id="radioAluno"]').click()
        self.user = self.browser.find_element(By.XPATH, '//*[@id="conteudo"]/div[2]/form/table/tbody/tr[2]/td/input').send_keys('*******') #COLOCAR LOGIN#
        self.password = self.browser.find_element(By.XPATH, '//*[@id="conteudo"]/div[2]/form/table/tbody/tr[3]/td/input').send_keys('******') #COLOCAR SENHA#
        self.logar = self.browser.find_element(By.XPATH, '//*[@id="conteudo"]/div[2]/form/table/tfoot/tr/td/input').click()

    def notas(self):
        self.ensino = self.browser.find_element(By.XPATH, '//*[@id="menu_form_menu_discente_j_id_jsp_352912730_101_menu"]/table/tbody/tr/td[1]')
        achains = ActionChains(self.browser)
        achains.move_to_element(self.ensino).perform()
        self.minhas_Notas = self.browser.find_element(By.XPATH, '//*[@id="cmSubMenuID1"]/table/tbody/tr[1]/td[2]').click()
        


aplcation()