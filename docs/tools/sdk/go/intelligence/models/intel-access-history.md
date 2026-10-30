# IntelAccessHistory

# IntelAccessHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItems** | [**IntelAccessHistoryAccessItemsSlice**](intel-access-history-access-items-slice) | First page of access-item history events for the identity. | 
**Certifications** | [**IntelAccessHistoryCertificationsSlice**](intel-access-history-certifications-slice) | First page of certification history events for the identity. | 

## Methods

### NewIntelAccessHistory

`func NewIntelAccessHistory(accessItems IntelAccessHistoryAccessItemsSlice, certifications IntelAccessHistoryCertificationsSlice, ) *IntelAccessHistory`

NewIntelAccessHistory instantiates a new IntelAccessHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelAccessHistoryWithDefaults

`func NewIntelAccessHistoryWithDefaults() *IntelAccessHistory`

NewIntelAccessHistoryWithDefaults instantiates a new IntelAccessHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessItems

`func (o *IntelAccessHistory) GetAccessItems() IntelAccessHistoryAccessItemsSlice`

GetAccessItems returns the AccessItems field if non-nil, zero value otherwise.

### GetAccessItemsOk

`func (o *IntelAccessHistory) GetAccessItemsOk() (*IntelAccessHistoryAccessItemsSlice, bool)`

GetAccessItemsOk returns a tuple with the AccessItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItems

`func (o *IntelAccessHistory) SetAccessItems(v IntelAccessHistoryAccessItemsSlice)`

SetAccessItems sets AccessItems field to given value.


### GetCertifications

`func (o *IntelAccessHistory) GetCertifications() IntelAccessHistoryCertificationsSlice`

GetCertifications returns the Certifications field if non-nil, zero value otherwise.

### GetCertificationsOk

`func (o *IntelAccessHistory) GetCertificationsOk() (*IntelAccessHistoryCertificationsSlice, bool)`

GetCertificationsOk returns a tuple with the Certifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertifications

`func (o *IntelAccessHistory) SetCertifications(v IntelAccessHistoryCertificationsSlice)`

SetCertifications sets Certifications field to given value.



