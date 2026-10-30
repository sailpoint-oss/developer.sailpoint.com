# Certification

# Certification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CampaignRef** | [**CampaignReference**](campaign-reference) |  | 
**Phase** | **CertificationPhase** |  | 
**ReviewProgress** | Pointer to **CertificationReviewProgress** |  | [optional] 
**DueDate** | **SailPointTime** | The due date of the certification. | 
**DateSigned** | Pointer to **SailPointTime** | The date the reviewer signed off on the certification. Omitted until the certification is signed off. | [optional] 
**DateFinished** | Pointer to **SailPointTime** | The date the certification was finished. | [optional] 
**Reviewer** | [**CertificationReviewer**](certification-reviewer) |  | 
**Reassignment** | Pointer to [**Reassignment**](reassignment) |  | [optional] 
**Completed** | **bool** | Indicates if all certification decisions have been made. | 
**DecisionsMade** | **int32** | The number of approve/revoke/acknowledge decisions that have been made by the reviewer. | 
**DecisionsTotal** | **int32** | The total number of approve/revoke/acknowledge decisions for the certification. | 
**CompletedSubjects** | **int32** | The number of subjects (identities, access profiles, roles, etc.) for which all decisions have been made and are complete. | 
**TotalSubjects** | **int32** | The total number of subjects (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | 
**Id** | Pointer to **string** | The certificationId | [optional] 
**Name** | Pointer to **string** | The name of the certification | [optional] 
**Created** | Pointer to **SailPointTime** | The date the certification was created | [optional] 
**Modified** | Pointer to **SailPointTime** | The date the certification was last modified | [optional] 
**ReauthRequired** | Pointer to **bool** | Indicates whether any review items within this certification requires reauthentication before sign-off or completion | [optional] [default to false]

## Methods

### NewCertification

`func NewCertification(campaignRef CampaignReference, phase CertificationPhase, dueDate SailPointTime, reviewer CertificationReviewer, completed bool, decisionsMade int32, decisionsTotal int32, completedSubjects int32, totalSubjects int32, ) *Certification`

NewCertification instantiates a new Certification object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationWithDefaults

`func NewCertificationWithDefaults() *Certification`

NewCertificationWithDefaults instantiates a new Certification object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCampaignRef

`func (o *Certification) GetCampaignRef() CampaignReference`

GetCampaignRef returns the CampaignRef field if non-nil, zero value otherwise.

### GetCampaignRefOk

`func (o *Certification) GetCampaignRefOk() (*CampaignReference, bool)`

GetCampaignRefOk returns a tuple with the CampaignRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignRef

`func (o *Certification) SetCampaignRef(v CampaignReference)`

SetCampaignRef sets CampaignRef field to given value.


### GetPhase

`func (o *Certification) GetPhase() CertificationPhase`

GetPhase returns the Phase field if non-nil, zero value otherwise.

### GetPhaseOk

`func (o *Certification) GetPhaseOk() (*CertificationPhase, bool)`

GetPhaseOk returns a tuple with the Phase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhase

`func (o *Certification) SetPhase(v CertificationPhase)`

SetPhase sets Phase field to given value.


### GetReviewProgress

`func (o *Certification) GetReviewProgress() CertificationReviewProgress`

GetReviewProgress returns the ReviewProgress field if non-nil, zero value otherwise.

### GetReviewProgressOk

`func (o *Certification) GetReviewProgressOk() (*CertificationReviewProgress, bool)`

GetReviewProgressOk returns a tuple with the ReviewProgress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewProgress

`func (o *Certification) SetReviewProgress(v CertificationReviewProgress)`

SetReviewProgress sets ReviewProgress field to given value.

### HasReviewProgress

`func (o *Certification) HasReviewProgress() bool`

HasReviewProgress returns a boolean if a field has been set.

### GetDueDate

`func (o *Certification) GetDueDate() SailPointTime`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *Certification) GetDueDateOk() (*SailPointTime, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *Certification) SetDueDate(v SailPointTime)`

SetDueDate sets DueDate field to given value.


### GetDateSigned

`func (o *Certification) GetDateSigned() SailPointTime`

GetDateSigned returns the DateSigned field if non-nil, zero value otherwise.

### GetDateSignedOk

`func (o *Certification) GetDateSignedOk() (*SailPointTime, bool)`

GetDateSignedOk returns a tuple with the DateSigned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateSigned

`func (o *Certification) SetDateSigned(v SailPointTime)`

SetDateSigned sets DateSigned field to given value.

### HasDateSigned

`func (o *Certification) HasDateSigned() bool`

HasDateSigned returns a boolean if a field has been set.

### GetDateFinished

`func (o *Certification) GetDateFinished() SailPointTime`

GetDateFinished returns the DateFinished field if non-nil, zero value otherwise.

### GetDateFinishedOk

`func (o *Certification) GetDateFinishedOk() (*SailPointTime, bool)`

GetDateFinishedOk returns a tuple with the DateFinished field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateFinished

`func (o *Certification) SetDateFinished(v SailPointTime)`

SetDateFinished sets DateFinished field to given value.

### HasDateFinished

`func (o *Certification) HasDateFinished() bool`

HasDateFinished returns a boolean if a field has been set.

### GetReviewer

`func (o *Certification) GetReviewer() CertificationReviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *Certification) GetReviewerOk() (*CertificationReviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *Certification) SetReviewer(v CertificationReviewer)`

SetReviewer sets Reviewer field to given value.


### GetReassignment

`func (o *Certification) GetReassignment() Reassignment`

GetReassignment returns the Reassignment field if non-nil, zero value otherwise.

### GetReassignmentOk

`func (o *Certification) GetReassignmentOk() (*Reassignment, bool)`

GetReassignmentOk returns a tuple with the Reassignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignment

`func (o *Certification) SetReassignment(v Reassignment)`

SetReassignment sets Reassignment field to given value.

### HasReassignment

`func (o *Certification) HasReassignment() bool`

HasReassignment returns a boolean if a field has been set.

### GetCompleted

`func (o *Certification) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Certification) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Certification) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.


### GetDecisionsMade

`func (o *Certification) GetDecisionsMade() int32`

GetDecisionsMade returns the DecisionsMade field if non-nil, zero value otherwise.

### GetDecisionsMadeOk

`func (o *Certification) GetDecisionsMadeOk() (*int32, bool)`

GetDecisionsMadeOk returns a tuple with the DecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsMade

`func (o *Certification) SetDecisionsMade(v int32)`

SetDecisionsMade sets DecisionsMade field to given value.


### GetDecisionsTotal

`func (o *Certification) GetDecisionsTotal() int32`

GetDecisionsTotal returns the DecisionsTotal field if non-nil, zero value otherwise.

### GetDecisionsTotalOk

`func (o *Certification) GetDecisionsTotalOk() (*int32, bool)`

GetDecisionsTotalOk returns a tuple with the DecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsTotal

`func (o *Certification) SetDecisionsTotal(v int32)`

SetDecisionsTotal sets DecisionsTotal field to given value.


### GetCompletedSubjects

`func (o *Certification) GetCompletedSubjects() int32`

GetCompletedSubjects returns the CompletedSubjects field if non-nil, zero value otherwise.

### GetCompletedSubjectsOk

`func (o *Certification) GetCompletedSubjectsOk() (*int32, bool)`

GetCompletedSubjectsOk returns a tuple with the CompletedSubjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedSubjects

`func (o *Certification) SetCompletedSubjects(v int32)`

SetCompletedSubjects sets CompletedSubjects field to given value.


### GetTotalSubjects

`func (o *Certification) GetTotalSubjects() int32`

GetTotalSubjects returns the TotalSubjects field if non-nil, zero value otherwise.

### GetTotalSubjectsOk

`func (o *Certification) GetTotalSubjectsOk() (*int32, bool)`

GetTotalSubjectsOk returns a tuple with the TotalSubjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSubjects

`func (o *Certification) SetTotalSubjects(v int32)`

SetTotalSubjects sets TotalSubjects field to given value.


### GetId

`func (o *Certification) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Certification) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Certification) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Certification) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Certification) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Certification) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Certification) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Certification) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Certification) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Certification) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Certification) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Certification) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Certification) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Certification) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Certification) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Certification) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetReauthRequired

`func (o *Certification) GetReauthRequired() bool`

GetReauthRequired returns the ReauthRequired field if non-nil, zero value otherwise.

### GetReauthRequiredOk

`func (o *Certification) GetReauthRequiredOk() (*bool, bool)`

GetReauthRequiredOk returns a tuple with the ReauthRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthRequired

`func (o *Certification) SetReauthRequired(v bool)`

SetReauthRequired sets ReauthRequired field to given value.

### HasReauthRequired

`func (o *Certification) HasReauthRequired() bool`

HasReauthRequired returns a boolean if a field has been set.


