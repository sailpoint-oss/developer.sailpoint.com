# ListCampaignFiltersV1200Response

# ListCampaignFiltersV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to [**[]CampaignFilterDetails**](campaign-filter-details) | List of campaign filters. | [optional] 
**Count** | Pointer to **int32** | Number of filters returned. | [optional] 

## Methods

### NewListCampaignFiltersV1200Response

`func NewListCampaignFiltersV1200Response() *ListCampaignFiltersV1200Response`

NewListCampaignFiltersV1200Response instantiates a new ListCampaignFiltersV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListCampaignFiltersV1200ResponseWithDefaults

`func NewListCampaignFiltersV1200ResponseWithDefaults() *ListCampaignFiltersV1200Response`

NewListCampaignFiltersV1200ResponseWithDefaults instantiates a new ListCampaignFiltersV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *ListCampaignFiltersV1200Response) GetItems() []CampaignFilterDetails`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *ListCampaignFiltersV1200Response) GetItemsOk() (*[]CampaignFilterDetails, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *ListCampaignFiltersV1200Response) SetItems(v []CampaignFilterDetails)`

SetItems sets Items field to given value.

### HasItems

`func (o *ListCampaignFiltersV1200Response) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetCount

`func (o *ListCampaignFiltersV1200Response) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ListCampaignFiltersV1200Response) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ListCampaignFiltersV1200Response) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ListCampaignFiltersV1200Response) HasCount() bool`

HasCount returns a boolean if a field has been set.


