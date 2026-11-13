# CertificationStatusSummary

# CertificationStatusSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActiveCertifications** | Pointer to **int32** | The number of active certifications | [optional] 
**OverdueCertifications** | Pointer to **int32** | The number of certifications passed the due date | [optional] 
**MaximumDaysOverdue** | Pointer to **int32** | The maximum number of days past due the most overdue certification is | [optional] 
**MinimumDaysLeftToComplete** | Pointer to **int32** | The closest number of days to completion | [optional] 
**CompletedDecisionsForActiveCerts** | Pointer to **int32** | The number of of decisions that have been made | [optional] 
**PendingDecisionsForActiveCerts** | Pointer to **int32** | The number of decisions that are pending | [optional] 

## Methods

### NewCertificationStatusSummary

`func NewCertificationStatusSummary() *CertificationStatusSummary`

NewCertificationStatusSummary instantiates a new CertificationStatusSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationStatusSummaryWithDefaults

`func NewCertificationStatusSummaryWithDefaults() *CertificationStatusSummary`

NewCertificationStatusSummaryWithDefaults instantiates a new CertificationStatusSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActiveCertifications

`func (o *CertificationStatusSummary) GetActiveCertifications() int32`

GetActiveCertifications returns the ActiveCertifications field if non-nil, zero value otherwise.

### GetActiveCertificationsOk

`func (o *CertificationStatusSummary) GetActiveCertificationsOk() (*int32, bool)`

GetActiveCertificationsOk returns a tuple with the ActiveCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveCertifications

`func (o *CertificationStatusSummary) SetActiveCertifications(v int32)`

SetActiveCertifications sets ActiveCertifications field to given value.

### HasActiveCertifications

`func (o *CertificationStatusSummary) HasActiveCertifications() bool`

HasActiveCertifications returns a boolean if a field has been set.

### GetOverdueCertifications

`func (o *CertificationStatusSummary) GetOverdueCertifications() int32`

GetOverdueCertifications returns the OverdueCertifications field if non-nil, zero value otherwise.

### GetOverdueCertificationsOk

`func (o *CertificationStatusSummary) GetOverdueCertificationsOk() (*int32, bool)`

GetOverdueCertificationsOk returns a tuple with the OverdueCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverdueCertifications

`func (o *CertificationStatusSummary) SetOverdueCertifications(v int32)`

SetOverdueCertifications sets OverdueCertifications field to given value.

### HasOverdueCertifications

`func (o *CertificationStatusSummary) HasOverdueCertifications() bool`

HasOverdueCertifications returns a boolean if a field has been set.

### GetMaximumDaysOverdue

`func (o *CertificationStatusSummary) GetMaximumDaysOverdue() int32`

GetMaximumDaysOverdue returns the MaximumDaysOverdue field if non-nil, zero value otherwise.

### GetMaximumDaysOverdueOk

`func (o *CertificationStatusSummary) GetMaximumDaysOverdueOk() (*int32, bool)`

GetMaximumDaysOverdueOk returns a tuple with the MaximumDaysOverdue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumDaysOverdue

`func (o *CertificationStatusSummary) SetMaximumDaysOverdue(v int32)`

SetMaximumDaysOverdue sets MaximumDaysOverdue field to given value.

### HasMaximumDaysOverdue

`func (o *CertificationStatusSummary) HasMaximumDaysOverdue() bool`

HasMaximumDaysOverdue returns a boolean if a field has been set.

### GetMinimumDaysLeftToComplete

`func (o *CertificationStatusSummary) GetMinimumDaysLeftToComplete() int32`

GetMinimumDaysLeftToComplete returns the MinimumDaysLeftToComplete field if non-nil, zero value otherwise.

### GetMinimumDaysLeftToCompleteOk

`func (o *CertificationStatusSummary) GetMinimumDaysLeftToCompleteOk() (*int32, bool)`

GetMinimumDaysLeftToCompleteOk returns a tuple with the MinimumDaysLeftToComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumDaysLeftToComplete

`func (o *CertificationStatusSummary) SetMinimumDaysLeftToComplete(v int32)`

SetMinimumDaysLeftToComplete sets MinimumDaysLeftToComplete field to given value.

### HasMinimumDaysLeftToComplete

`func (o *CertificationStatusSummary) HasMinimumDaysLeftToComplete() bool`

HasMinimumDaysLeftToComplete returns a boolean if a field has been set.

### GetCompletedDecisionsForActiveCerts

`func (o *CertificationStatusSummary) GetCompletedDecisionsForActiveCerts() int32`

GetCompletedDecisionsForActiveCerts returns the CompletedDecisionsForActiveCerts field if non-nil, zero value otherwise.

### GetCompletedDecisionsForActiveCertsOk

`func (o *CertificationStatusSummary) GetCompletedDecisionsForActiveCertsOk() (*int32, bool)`

GetCompletedDecisionsForActiveCertsOk returns a tuple with the CompletedDecisionsForActiveCerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedDecisionsForActiveCerts

`func (o *CertificationStatusSummary) SetCompletedDecisionsForActiveCerts(v int32)`

SetCompletedDecisionsForActiveCerts sets CompletedDecisionsForActiveCerts field to given value.

### HasCompletedDecisionsForActiveCerts

`func (o *CertificationStatusSummary) HasCompletedDecisionsForActiveCerts() bool`

HasCompletedDecisionsForActiveCerts returns a boolean if a field has been set.

### GetPendingDecisionsForActiveCerts

`func (o *CertificationStatusSummary) GetPendingDecisionsForActiveCerts() int32`

GetPendingDecisionsForActiveCerts returns the PendingDecisionsForActiveCerts field if non-nil, zero value otherwise.

### GetPendingDecisionsForActiveCertsOk

`func (o *CertificationStatusSummary) GetPendingDecisionsForActiveCertsOk() (*int32, bool)`

GetPendingDecisionsForActiveCertsOk returns a tuple with the PendingDecisionsForActiveCerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPendingDecisionsForActiveCerts

`func (o *CertificationStatusSummary) SetPendingDecisionsForActiveCerts(v int32)`

SetPendingDecisionsForActiveCerts sets PendingDecisionsForActiveCerts field to given value.

### HasPendingDecisionsForActiveCerts

`func (o *CertificationStatusSummary) HasPendingDecisionsForActiveCerts() bool`

HasPendingDecisionsForActiveCerts returns a boolean if a field has been set.


