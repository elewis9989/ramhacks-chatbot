

exports.handler = (event, context, callback) => {
   // when intent get fulfilled, inform lex to complete the state
   var purchase = event.currentIntent.name;
   var answer = "hi";

   var qlabel = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10']
   var answers = ['Prospective  freshmen seeking admission to VCU immediately after high school graduation are  generally but not solely evaluated on the four criteria listed below. High school grade-point averageTest scores from the SAT Reasoning Test or ACT; students who wish to be considered for test score optional review should review the "Test scores" section of our freshman admissions requirements.Rank in class (Students graduating from a high school that does  not do a class ranking will not be penalized in the admission process.)High school curriculum High school grade-point average Test scores from the SAT Reasoning Test or ACT; students who wish to be considered for test score optional review should review the "Test scores" section of our freshman admissions requirements. freshman admissions requirements Rank in class (Students graduating from a high school that does  not do a class ranking will not be penalized in the admission process.) High school curriculum 4 units of English3 units of history, social studies or government3 units in mathematics (including algebra I and either geometry  or algebra II)3 units in science (at least one laboratory)3 units of one foreign language or 2 units of two foreign languages 4 units of English 3 units of history, social studies or government 3 units in mathematics (including algebra I and either geometry  or algebra II) 3 units in science (at least one laboratory) 3 units of one foreign language or 2 units of two foreign languages'
   'Transfer  applicants must present evidence of good standing at the last institution  attended. A cumulative grade-point average of 2.5 on a 4.0 scale in all hours  attempted is recommended for admission. Students who have earned fewer than 30  semester (45 quarter) hours must submit their high school transcripts and, if  under 22 years of age, SAT/ACT scores.'
   'Students  applying to the School of the Arts must submit the standard university  undergraduate application in addition to supplemental materials. There is a $65 application fee for all School of the Arts applicants. For more information about  program requirements and deadlines, contact the School of the Arts toll free at  (866) 534-3201 or locally at (804) 828-2787, orvisit their website. visit their website '
   'To be  competitive for admission to the School of Engineering, freshman applicants  should present a strong GPA (A/B+ average preferred), competitive test scores  and a challenging college preparatory curriculum. Freshman applicants to the  School of Engineering who are not accepted directly into the school will  automatically be considered for admission into the undeclared major in the  College of Humanities and Sciences. For additional information, call the School  of Engineering at (804) 828-2129, emailaskengineering@vcu.edu or visit the School of Engineering website at www.egr.vcu.edu. askengineering@vcu.edu www.egr.vcu.edu'
   'Transfer  applicants to the School of Nursing must apply by the Feb. 1 deadline and must  submit supplemental admissions materials, which are only available online.  Along with the application for undergraduate admission, all transfer applicants  to the School of Nursing, regardless of age, are required to submit SAT, ACT or  GRE test scores and official transcripts from high school and all colleges and  universities. In addition, applicants must submit a one- to two-page essay on  the topic “Education and Life: A Personal Statement” in which they discuss  their educational goals including why they wish to study their chosen major. online'
   'Freshman applicantsFallSpringFreshmen applying for guaranteed admission to the School of Medicine (B.S./M.D.)Nov. 15*n/aFreshmen applying for guaranteed admission to programs other than medicineNov. 15n/aFreshmen applying for scholarship considerationNov. 15n/aFreshmen applying for regular decisionJan. 16Nov. 1 Freshman applicantsFallSpring Freshman applicants Fall Spring Freshmen applying for guaranteed admission to the School of Medicine (B.S./M.D.)Nov. 15*n/a Freshmen applying for guaranteed admission to the School of Medicine (B.S./M.D.)  Nov. 15* n/a Freshmen applying for guaranteed admission to programs other than medicineNov. 15n/a Freshmen applying for guaranteed admission to programs other than medicine Nov. 15 n/a Freshmen applying for scholarship considerationNov. 15n/a Freshmen applying for scholarship consideration Nov. 15 n/a Freshmen applying for regular decisionJan. 16Nov. 1 Freshmen applying for regular decision Jan. 16 Nov. 1 Transfer applicants – Monroe Park Campus undergraduate programsFallSpringTransfer students applying for scholarship considerationMarch 15n/aTransfer students applying for admission to all undergraduate programs other than those in the School of the ArtsMarch 15Nov. 1Transfer students applying for admission to undergraduate programs in the School of the Arts should visit the school’s website at vcu.edu/arts/apply for more information about requirements and deadlinesVisit the School of the Arts website: arts.vcu.edu Transfer applicants – Monroe Park Campus undergraduate programsFallSpring Transfer applicants – Monroe Park Campus undergraduate programs Fall Spring Transfer students applying for scholarship considerationMarch 15n/a Transfer students applying for scholarship consideration March 15 n/a Transfer students applying for admission to all undergraduate programs other than those in the School of the ArtsMarch 15Nov. 1 Transfer students applying for admission to all undergraduate programs other than those in the School of the Arts March 15 Nov. 1 Transfer students applying for admission to undergraduate programs in the School of the Arts should visit the school’s website at vcu.edu/arts/apply for more information about requirements and deadlinesVisit the School of the Arts website: arts.vcu.edu Transfer students applying for admission to undergraduate programs in the School of the Arts should visit the school’s website at vcu.edu/arts/apply for more information about requirements and deadlines vcu.edu/arts/apply Visit the School of the Arts website: arts.vcu.edu arts.vcu.edu Transfer applicants – MCV Campus undergraduate programsFallSpringClinical laboratory sciencesApril 1*n/aClinical radiation sciencesFeb. 1*n/aDental hygieneJan. 15*n/aTransfer students applying for admission to undergraduate programs in the School of Nursing should visit the School of Nursing admissions website about program requirements and deadlines.Visit the School of Nursing website: nursing.vcu.edu Transfer applicants – MCV Campus undergraduate programsFallSpring Transfer applicants – MCV Campus undergraduate programs Fall Spring Clinical laboratory sciencesApril 1*n/a Clinical laboratory sciences April 1* n/a Clinical radiation sciencesFeb. 1*n/a Clinical radiation sciences Feb. 1* n/a Dental hygieneJan. 15*n/a Dental hygiene Jan. 15* n/a Transfer students applying for admission to undergraduate programs in the School of Nursing should visit the School of Nursing admissions website about program requirements and deadlines.Visit the School of Nursing website: nursing.vcu.edu Transfer students applying for admission to undergraduate programs in the School of Nursing should visit the School of Nursing admissions website about program requirements and deadlines. School of Nursing admissions website Visit the School of Nursing website: nursing.vcu.edu nursing.vcu.edu * Firm  deadline, separate guaranteed admission application also required.            ** Firm deadline, separate supplemental application and materials also  required.            *** Firm deadline, program begins in summer: separate supplemental application  materials also required.  '
   'Applicants  who submit completed materials by Jan. 15 will be notified by April 1. Those  applying after Jan. 15 will be notified on a rolling basis until the class is  filled.'
   'Yes,  AP courses give the admissions staff a better indication of how a student will  do at the university because AP courses are equivalent to college courses.  Honors-level and AP courses successfully completed could bring a more favorable admissions decision. The university accepts all AP classes (except Studio Art).  You must have a score of 3 or better on your AP final exam to receive college  credit at VCU. '
   'Interviews  at VCU are not required as part of the application process, but we strongly  suggest that students visit campus. We hope our urban university with its  academic and cultural diversity is the right setting for you. The only way to  determine this is by visiting. A campus visit will enable you to see the physical  layout of VCU and give you a chance to talk with currently enrolled students and  faculty. campus visit '
   'The Office of  Admissions  holds information sessions Monday through Friday at 10:30 a.m. and 2 p.m. and on Saturdays at 10:30 a.m. except on holidays and holiday weekends. The sessions are held in the Welcome Center at 1111 W. Broad St.,  which is adjacent to the Barnes & Noble @ VCU, and are followed by  an hourlong walking tour of the Monroe Park Campus. After the tour is completed,  for those who are interested in asking more personal questions, admissions  counselors are available to meet with prospective students and their families  individually. Register to attend one of our daily information sessions for prospective students and their families. Register']
   
   if (purchase==qlabel[0]){
     answer = answers[0]
   }
   else if (purchase==qlabel[0]){
     answer = answers[1]
   }    
   else if (purchase==qlabel[1]){
     answer = answers[1]
   }  
   else if (purchase==qlabel[2]){
     answer = answers[1]
   }  
   else if (purchase==qlabel[3]){
     answer = answers[1]
   }  
   else if (purchase==qlabel[4]){
     answer = answers[1]
   }  
   else if (purchase==qlabel[5]){
     answer = answers[1]
   }  
   else if (purchase==qlabel[6]){
     answer = answers[1]
   }  
   else if (purchase==qlabel[7]){
     answer = answers[1]
   } 
   else if (purchase==qlabel[8]){
     answer = answers[1]
   } 
   else if (purchase==qlabel[9]){
     answer = answers[1]
   } 

   let response = {sessionAttributes: event.sessionAttributes,
     dialogAction: {
       type: "Close",
       fulfillmentState: "Fulfilled",
       message: {
         contentType: "PlainText",
         content: answer
       }
     }
   }
   callback(null, response);
};