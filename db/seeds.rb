# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#


diarrhea = Condition.create(
	name: 'Diarrhea', 
	description: 'The condition of having three or more loose or liquid bowel movements per day'
)

pneumonia = Condition.create(
	name: 'Pneumonia', 
	description: 'An inflammatory condition of the lung'
)

household_survey = SurveyMethod.create(
	name: 'Household survey', 
	description: 'Population Based Survey'
)

retail_audit = SurveyMethod.create(
	name: 'Retail audit', 
	description: 'Health facility assessment'
)

document_review = SurveyMethod.create(
	name: 'Document review', 
	description: 'Document review'
)



indicators = Indicator.create([
{
	:name => 'Diarrhea care-seeking', 
	definition: 'Proportion of children under age five with diarrhea in the previous two weeks who sought care from an 5 appropriate healthcare provider', 
	metric: 'Numerator: Number of children under age five with diarrhea in the previous two weeks who sought care from an appropriate healthcare provider Denominator: Total number of children under age five with diarrhea in the previous two weeks', 
	condition: diarrhea, 
	survey_method: household_survey
	},
{
	name: 'ORS coverage', 
	definition: 'Proportion of children under age five with diarrhea in the previous two weeks who received ORS', 
	metric: 'Numerator: Number of children under age five with diarrhea in the previous two weeks who received ORS Denominator: Total number of children under age five with diarrhea in the previous two weeks', 
	condition: diarrhea, 
	survey_method: household_survey
	},
{
	name: 'ORS and zinc combined coverage', 
	definition: 'Proportion of children under age five with diarrhea in the previous two weeks who received zinc with ORS', 
	metric: 'Numerator: Number of children under age five with diarrhea in the previous two weeks who received zinc with ORS Denominator: Total number of children under age five with diarrhea in the previous two weeks', 
	condition: diarrhea, 
	survey_method: household_survey
	},
{
	name: 'ORS and zinc availability', 
	definition: 'Proportion of healthcare treatment sources with ORS and zinc in-stock on the day of the survey', 
	metric: 'Numerator: Number of healthcare treatment sources with ORS and zinc in- stock on the day of the survey Denominator: Total number of healthcare treatment sources', 
	condition: diarrhea, 
	survey_method: retail_audit},
{
	name: 'National treatment guidelines', 
	definition: 'ORS and zinc is the recommended first- line treatment for diarrhoea', 
	metric: 'N/A', 
	condition: diarrhea, 
	survey_method: document_review
	},
{
	name: 'Zinc OTC status', 
	definition: 'Zinc is designated as an over-the- counter class drug', 
	metric: 'N/A', 
	condition: diarrhea, 
	survey_method: document_review
	},
{
	name: 'Low-osmolarity ORS registration', 
	definition: 'At least one L-ORS product registered with National Drug Authorities', 
	metric: 'N/A', 
	condition: diarrhea, 
	survey_method: document_review
	},
{
	name: 'Zinc registration', 
	definition: 'At least one zinc product registered with National Drug Authorities', 
	metric: 'N/A', 
	condition: diarrhea, 
	survey_method: document_review
	},
{
	name: 'ORS and zinc are included in the Essential Medicines List (EML) and National Procurement List', 
	definition: 'ORS and zinc are included in the EML and National Procurement list', 
	metric: 'N/A', 
	condition: diarrhea, 
	survey_method: document_review
	},

{
	name: 'Pneumonia care-seeking', 
	definition: 'Proportion of children under age five with suspected pneumonia in the previous two weeks who sought care from an appropriate health care provider', 
	metric: 'Numerator: Number of children under age five with suspected pneumonia in the previous two weeks who sought care from an appropriate health care provider Denominator: Total number of children under age five with suspected pneumonia in the previous two weeks', 
	condition: pneumonia, 
	survey_method: household_survey
	},
{
	name: 'Availability of nationally recommended antibiotic for pneumonia treatment', 
	definition: 'Proportion of appropriate healthcare treatment sources with the nationally recommended antibiotic(s) in-stock on the day of the survey', 
	metric: 'Numerator: Number of appropriate healthcare treatment sources with nationally recommended antibiotics in-stock on the day of the survey Denominator: Total number of appropriate healthcare treatment sources', 
	condition: pneumonia, 
	survey_method: retail_audit
	},
{
	name: 'Amoxicillin recommended as the first or second-line treatment for pneumonia in national guidelines', 
	definition: 'Amoxicillin is the first or second-line treatment for pneumonia in national guidelines', 
	metric: 'N/A', 
	condition: pneumonia, 
	survey_method: document_review
	},
{
	name: 'Policy allowing local community- based provider to dispense nationally recommended antibiotics for pneumonia', 
	definition: 'There is a policy allowing local community-based provider to carry and dispense the nationally recommended antibiotics for treating pneumonia', 
	metric: 'N/A', 
	condition: pneumonia, 
	survey_method: document_review
	},
{
	name: 'Registration of the pediatric formulation of the nationally recommended antibiotic',
	definition: 'At least one pediatric formulation of the nationally recommended antibiotic for pneumonia treatment registered with the National Drug Authorities', 
	metric: 'N/A', 
	condition: pneumonia, 
	survey_method: document_review
	},
{
	name: 'Appropriate pediatric antibiotic formulation for pneumonia is included in the Essential Medicines List (EML) and National Procurement list', 
	definition: 'Pediatric formulations for the nationally recommended antibiotics for treating pneumonia are included in the EML and National Procurement list', 
	metric: 'N/A', 
	condition: pneumonia, 
	survey_method: document_review
}

])
