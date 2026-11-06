# AuditDetails

# AuditDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **SailPointTime** | Initial date and time when the record was created | [optional] 
**CreatedBy** | Pointer to [**Identity2**](identity2) |  | [optional] 
**Modified** | Pointer to **SailPointTime** | Last modified date and time for the record | [optional] 
**ModifiedBy** | Pointer to [**Identity2**](identity2) |  | [optional] 

## Methods

### NewAuditDetails

`func NewAuditDetails() *AuditDetails`

NewAuditDetails instantiates a new AuditDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuditDetailsWithDefaults

`func NewAuditDetailsWithDefaults() *AuditDetails`

NewAuditDetailsWithDefaults instantiates a new AuditDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *AuditDetails) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *AuditDetails) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *AuditDetails) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *AuditDetails) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetCreatedBy

`func (o *AuditDetails) GetCreatedBy() Identity2`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *AuditDetails) GetCreatedByOk() (*Identity2, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *AuditDetails) SetCreatedBy(v Identity2)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *AuditDetails) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetModified

`func (o *AuditDetails) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *AuditDetails) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *AuditDetails) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *AuditDetails) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetModifiedBy

`func (o *AuditDetails) GetModifiedBy() Identity2`

GetModifiedBy returns the ModifiedBy field if non-nil, zero value otherwise.

### GetModifiedByOk

`func (o *AuditDetails) GetModifiedByOk() (*Identity2, bool)`

GetModifiedByOk returns a tuple with the ModifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedBy

`func (o *AuditDetails) SetModifiedBy(v Identity2)`

SetModifiedBy sets ModifiedBy field to given value.

### HasModifiedBy

`func (o *AuditDetails) HasModifiedBy() bool`

HasModifiedBy returns a boolean if a field has been set.


