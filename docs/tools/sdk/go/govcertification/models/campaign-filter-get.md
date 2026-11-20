# CampaignFilterGet

# CampaignFilterGet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the campaign filter | [optional] 
**Name** | **string** | This is campaign filter's name. | 
**Description** | **string** | This is campaign filter's description. | 
**Owner** | **string** | The owner of this filter. This field is automatically populated at creation time with the current user. | 
**Created** | Pointer to **SailPointTime** | Creation date of Campaign Filter | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Modification date of Campaign Filter | [optional] [readonly] 
**Mode** | **CampaignFilterType** |  | 
**CriteriaList** | Pointer to [**[]Criteria**](criteria) | List of criteria. | [optional] 

## Methods

### NewCampaignFilterGet

`func NewCampaignFilterGet(name string, description string, owner string, mode CampaignFilterType, ) *CampaignFilterGet`

NewCampaignFilterGet instantiates a new CampaignFilterGet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignFilterGetWithDefaults

`func NewCampaignFilterGetWithDefaults() *CampaignFilterGet`

NewCampaignFilterGetWithDefaults instantiates a new CampaignFilterGet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignFilterGet) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignFilterGet) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignFilterGet) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CampaignFilterGet) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CampaignFilterGet) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignFilterGet) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignFilterGet) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignFilterGet) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignFilterGet) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignFilterGet) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetOwner

`func (o *CampaignFilterGet) GetOwner() string`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *CampaignFilterGet) GetOwnerOk() (*string, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *CampaignFilterGet) SetOwner(v string)`

SetOwner sets Owner field to given value.


### GetCreated

`func (o *CampaignFilterGet) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CampaignFilterGet) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CampaignFilterGet) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CampaignFilterGet) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *CampaignFilterGet) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CampaignFilterGet) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CampaignFilterGet) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CampaignFilterGet) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetMode

`func (o *CampaignFilterGet) GetMode() CampaignFilterType`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *CampaignFilterGet) GetModeOk() (*CampaignFilterType, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *CampaignFilterGet) SetMode(v CampaignFilterType)`

SetMode sets Mode field to given value.


### GetCriteriaList

`func (o *CampaignFilterGet) GetCriteriaList() []Criteria`

GetCriteriaList returns the CriteriaList field if non-nil, zero value otherwise.

### GetCriteriaListOk

`func (o *CampaignFilterGet) GetCriteriaListOk() (*[]Criteria, bool)`

GetCriteriaListOk returns a tuple with the CriteriaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaList

`func (o *CampaignFilterGet) SetCriteriaList(v []Criteria)`

SetCriteriaList sets CriteriaList field to given value.

### HasCriteriaList

`func (o *CampaignFilterGet) HasCriteriaList() bool`

HasCriteriaList returns a boolean if a field has been set.


