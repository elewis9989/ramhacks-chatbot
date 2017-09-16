

# Python scrapper for the VCU page

import numpy as np
import bs4 as bs
import urllib.request

#url = raw_input("Enter a website to extract the URL's from: ")

sauce  = urllib.request.urlopen("http://www.ugrad.vcu.edu/why/faqs/admissions.html").read()
soup = bs.BeautifulSoup(sauce, 'lxml')

questions = []
answers = []

for q in soup.find_all('h4'):
	
	questions.append(q.string)

	i = q.find_next()
	curr_answer = []
	
	while (i.string != "Back to top"):

		print (i.name)
		if (i.name != 'h5'):
			print ("	Appending: ", i.text)
			curr_answer.append(i.text)

		i = i.find_next()

	print ("-------------------------- ")
	
	answers.append(curr_answer) 

def cleanup():
	print ('hi')





print ("QUESTIONS: ", np.asarray(questions))
print (" \n \n")
print ("ANSWERS: ", np.asarray(answers))

