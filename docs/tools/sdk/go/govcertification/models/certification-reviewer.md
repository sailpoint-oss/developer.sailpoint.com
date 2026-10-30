# CertificationReviewer

# CertificationReviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the Identity or Governance Group | [optional] 
**Type** | Pointer to **string** | Type of the reviewer | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the Identity or Governance Group | [optional] 
**Email** | Pointer to **string** | The email of the Identity | [optional] 

## Methods

### NewCertificationReviewer

`func NewCertificationReviewer() *CertificationReviewer`

NewCertificationReviewer instantiates a new CertificationReviewer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationReviewerWithDefaults

`func NewCertificationReviewerWithDefaults() *CertificationReviewer`

NewCertificationReviewerWithDefaults instantiates a new CertificationReviewer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CertificationReviewer) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CertificationReviewer) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CertificationReviewer) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CertificationReviewer) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *CertificationReviewer) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CertificationReviewer) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CertificationReviewer) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CertificationReviewer) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *CertificationReviewer) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CertificationReviewer) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CertificationReviewer) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CertificationReviewer) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *CertificationReviewer) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CertificationReviewer) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CertificationReviewer) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *CertificationReviewer) HasEmail() bool`

HasEmail returns a boolean if a field has been set.


