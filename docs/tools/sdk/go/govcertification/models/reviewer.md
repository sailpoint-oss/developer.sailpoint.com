# Reviewer

# Reviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the Identity or Governance Group | [optional] 
**Type** | **CampaignReviewerType** |  | 
**Name** | Pointer to **string** | Human-readable display name of the Identity or Governance Group | [optional] 

## Methods

### NewReviewer

`func NewReviewer(type_ CampaignReviewerType, ) *Reviewer`

NewReviewer instantiates a new Reviewer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewerWithDefaults

`func NewReviewerWithDefaults() *Reviewer`

NewReviewerWithDefaults instantiates a new Reviewer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Reviewer) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Reviewer) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Reviewer) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Reviewer) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Reviewer) GetType() CampaignReviewerType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Reviewer) GetTypeOk() (*CampaignReviewerType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Reviewer) SetType(v CampaignReviewerType)`

SetType sets Type field to given value.


### GetName

`func (o *Reviewer) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Reviewer) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Reviewer) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Reviewer) HasName() bool`

HasName returns a boolean if a field has been set.


