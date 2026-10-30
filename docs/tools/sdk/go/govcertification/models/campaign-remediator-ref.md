# CampaignRemediatorRef

# CampaignRemediatorRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of the remediator. | 
**Name** | Pointer to **string** | The name of the remediator. | [optional] [readonly] 

## Methods

### NewCampaignRemediatorRef

`func NewCampaignRemediatorRef(id string, ) *CampaignRemediatorRef`

NewCampaignRemediatorRef instantiates a new CampaignRemediatorRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignRemediatorRefWithDefaults

`func NewCampaignRemediatorRefWithDefaults() *CampaignRemediatorRef`

NewCampaignRemediatorRefWithDefaults instantiates a new CampaignRemediatorRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignRemediatorRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignRemediatorRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignRemediatorRef) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *CampaignRemediatorRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignRemediatorRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignRemediatorRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CampaignRemediatorRef) HasName() bool`

HasName returns a boolean if a field has been set.


