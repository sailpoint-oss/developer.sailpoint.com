# CertificationReference

# CertificationReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationId** | Pointer to **string** | ID of certification for review. | [optional] 
**CertificationDisplayName** | Pointer to **string** | Display name of certification for review. | [optional] 
**Reviewer** | Pointer to [**CertificationReviewer**](certification-reviewer) |  | [optional] 

## Methods

### NewCertificationReference

`func NewCertificationReference() *CertificationReference`

NewCertificationReference instantiates a new CertificationReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationReferenceWithDefaults

`func NewCertificationReferenceWithDefaults() *CertificationReference`

NewCertificationReferenceWithDefaults instantiates a new CertificationReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificationId

`func (o *CertificationReference) GetCertificationId() string`

GetCertificationId returns the CertificationId field if non-nil, zero value otherwise.

### GetCertificationIdOk

`func (o *CertificationReference) GetCertificationIdOk() (*string, bool)`

GetCertificationIdOk returns a tuple with the CertificationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationId

`func (o *CertificationReference) SetCertificationId(v string)`

SetCertificationId sets CertificationId field to given value.

### HasCertificationId

`func (o *CertificationReference) HasCertificationId() bool`

HasCertificationId returns a boolean if a field has been set.

### GetCertificationDisplayName

`func (o *CertificationReference) GetCertificationDisplayName() string`

GetCertificationDisplayName returns the CertificationDisplayName field if non-nil, zero value otherwise.

### GetCertificationDisplayNameOk

`func (o *CertificationReference) GetCertificationDisplayNameOk() (*string, bool)`

GetCertificationDisplayNameOk returns a tuple with the CertificationDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationDisplayName

`func (o *CertificationReference) SetCertificationDisplayName(v string)`

SetCertificationDisplayName sets CertificationDisplayName field to given value.

### HasCertificationDisplayName

`func (o *CertificationReference) HasCertificationDisplayName() bool`

HasCertificationDisplayName returns a boolean if a field has been set.

### GetReviewer

`func (o *CertificationReference) GetReviewer() CertificationReviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CertificationReference) GetReviewerOk() (*CertificationReviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CertificationReference) SetReviewer(v CertificationReviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *CertificationReference) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.


