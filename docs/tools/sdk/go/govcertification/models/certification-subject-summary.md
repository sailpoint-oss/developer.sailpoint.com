# CertificationSubjectSummary

# CertificationSubjectSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubjectType** | Pointer to **string** | The type of subject being targeted by this certification | [optional] 
**Id** | Pointer to **string** | The subject id | [optional] 
**SubjectName** | Pointer to **string** | Name of the target subject | [optional] 
**SubjectTargetId** | Pointer to **string** | The ID of the entity being targeted by a certification | [optional] 
**Completed** | Pointer to **bool** | Indicates whether the review items for the linked subject's certification have been completed | [optional] [default to false]
**SubjectEmail** | Pointer to **string** | Email of the subject | [optional] 
**SubjectManagerName** | Pointer to **string** | The name of the subject's manager | [optional] 
**IdentityState** | Pointer to **string** | The state of identity/subject | [optional] 

## Methods

### NewCertificationSubjectSummary

`func NewCertificationSubjectSummary() *CertificationSubjectSummary`

NewCertificationSubjectSummary instantiates a new CertificationSubjectSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationSubjectSummaryWithDefaults

`func NewCertificationSubjectSummaryWithDefaults() *CertificationSubjectSummary`

NewCertificationSubjectSummaryWithDefaults instantiates a new CertificationSubjectSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubjectType

`func (o *CertificationSubjectSummary) GetSubjectType() string`

GetSubjectType returns the SubjectType field if non-nil, zero value otherwise.

### GetSubjectTypeOk

`func (o *CertificationSubjectSummary) GetSubjectTypeOk() (*string, bool)`

GetSubjectTypeOk returns a tuple with the SubjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubjectType

`func (o *CertificationSubjectSummary) SetSubjectType(v string)`

SetSubjectType sets SubjectType field to given value.

### HasSubjectType

`func (o *CertificationSubjectSummary) HasSubjectType() bool`

HasSubjectType returns a boolean if a field has been set.

### GetId

`func (o *CertificationSubjectSummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CertificationSubjectSummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CertificationSubjectSummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CertificationSubjectSummary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSubjectName

`func (o *CertificationSubjectSummary) GetSubjectName() string`

GetSubjectName returns the SubjectName field if non-nil, zero value otherwise.

### GetSubjectNameOk

`func (o *CertificationSubjectSummary) GetSubjectNameOk() (*string, bool)`

GetSubjectNameOk returns a tuple with the SubjectName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubjectName

`func (o *CertificationSubjectSummary) SetSubjectName(v string)`

SetSubjectName sets SubjectName field to given value.

### HasSubjectName

`func (o *CertificationSubjectSummary) HasSubjectName() bool`

HasSubjectName returns a boolean if a field has been set.

### GetSubjectTargetId

`func (o *CertificationSubjectSummary) GetSubjectTargetId() string`

GetSubjectTargetId returns the SubjectTargetId field if non-nil, zero value otherwise.

### GetSubjectTargetIdOk

`func (o *CertificationSubjectSummary) GetSubjectTargetIdOk() (*string, bool)`

GetSubjectTargetIdOk returns a tuple with the SubjectTargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubjectTargetId

`func (o *CertificationSubjectSummary) SetSubjectTargetId(v string)`

SetSubjectTargetId sets SubjectTargetId field to given value.

### HasSubjectTargetId

`func (o *CertificationSubjectSummary) HasSubjectTargetId() bool`

HasSubjectTargetId returns a boolean if a field has been set.

### GetCompleted

`func (o *CertificationSubjectSummary) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *CertificationSubjectSummary) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *CertificationSubjectSummary) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *CertificationSubjectSummary) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetSubjectEmail

`func (o *CertificationSubjectSummary) GetSubjectEmail() string`

GetSubjectEmail returns the SubjectEmail field if non-nil, zero value otherwise.

### GetSubjectEmailOk

`func (o *CertificationSubjectSummary) GetSubjectEmailOk() (*string, bool)`

GetSubjectEmailOk returns a tuple with the SubjectEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubjectEmail

`func (o *CertificationSubjectSummary) SetSubjectEmail(v string)`

SetSubjectEmail sets SubjectEmail field to given value.

### HasSubjectEmail

`func (o *CertificationSubjectSummary) HasSubjectEmail() bool`

HasSubjectEmail returns a boolean if a field has been set.

### GetSubjectManagerName

`func (o *CertificationSubjectSummary) GetSubjectManagerName() string`

GetSubjectManagerName returns the SubjectManagerName field if non-nil, zero value otherwise.

### GetSubjectManagerNameOk

`func (o *CertificationSubjectSummary) GetSubjectManagerNameOk() (*string, bool)`

GetSubjectManagerNameOk returns a tuple with the SubjectManagerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubjectManagerName

`func (o *CertificationSubjectSummary) SetSubjectManagerName(v string)`

SetSubjectManagerName sets SubjectManagerName field to given value.

### HasSubjectManagerName

`func (o *CertificationSubjectSummary) HasSubjectManagerName() bool`

HasSubjectManagerName returns a boolean if a field has been set.

### GetIdentityState

`func (o *CertificationSubjectSummary) GetIdentityState() string`

GetIdentityState returns the IdentityState field if non-nil, zero value otherwise.

### GetIdentityStateOk

`func (o *CertificationSubjectSummary) GetIdentityStateOk() (*string, bool)`

GetIdentityStateOk returns a tuple with the IdentityState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityState

`func (o *CertificationSubjectSummary) SetIdentityState(v string)`

SetIdentityState sets IdentityState field to given value.

### HasIdentityState

`func (o *CertificationSubjectSummary) HasIdentityState() bool`

HasIdentityState returns a boolean if a field has been set.


