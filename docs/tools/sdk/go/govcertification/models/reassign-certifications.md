# ReassignCertifications

# ReassignCertifications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationIds** | **[]string** | List of certification IDs to reassign | 
**ReassignTo** | [**ReassignCertificationsReassignTo**](reassign-certifications-reassign-to) |  | 
**Reason** | **string** | Comment to explain why the certification was reassigned | 

## Methods

### NewReassignCertifications

`func NewReassignCertifications(certificationIds []string, reassignTo ReassignCertificationsReassignTo, reason string, ) *ReassignCertifications`

NewReassignCertifications instantiates a new ReassignCertifications object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReassignCertificationsWithDefaults

`func NewReassignCertificationsWithDefaults() *ReassignCertifications`

NewReassignCertificationsWithDefaults instantiates a new ReassignCertifications object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificationIds

`func (o *ReassignCertifications) GetCertificationIds() []string`

GetCertificationIds returns the CertificationIds field if non-nil, zero value otherwise.

### GetCertificationIdsOk

`func (o *ReassignCertifications) GetCertificationIdsOk() (*[]string, bool)`

GetCertificationIdsOk returns a tuple with the CertificationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationIds

`func (o *ReassignCertifications) SetCertificationIds(v []string)`

SetCertificationIds sets CertificationIds field to given value.


### GetReassignTo

`func (o *ReassignCertifications) GetReassignTo() ReassignCertificationsReassignTo`

GetReassignTo returns the ReassignTo field if non-nil, zero value otherwise.

### GetReassignToOk

`func (o *ReassignCertifications) GetReassignToOk() (*ReassignCertificationsReassignTo, bool)`

GetReassignToOk returns a tuple with the ReassignTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignTo

`func (o *ReassignCertifications) SetReassignTo(v ReassignCertificationsReassignTo)`

SetReassignTo sets ReassignTo field to given value.


### GetReason

`func (o *ReassignCertifications) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *ReassignCertifications) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *ReassignCertifications) SetReason(v string)`

SetReason sets Reason field to given value.



