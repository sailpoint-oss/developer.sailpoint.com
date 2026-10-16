# AccessCriteria

# AccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the access criteria grouping. | 
**ConflictingItems** | [**[]Conflictingitem**](conflictingitem) | The list of access items that make up this side of the conflict. | 

## Methods

### NewAccessCriteria

`func NewAccessCriteria(name string, conflictingItems []Conflictingitem, ) *AccessCriteria`

NewAccessCriteria instantiates a new AccessCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessCriteriaWithDefaults

`func NewAccessCriteriaWithDefaults() *AccessCriteria`

NewAccessCriteriaWithDefaults instantiates a new AccessCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AccessCriteria) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessCriteria) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessCriteria) SetName(v string)`

SetName sets Name field to given value.


### GetConflictingItems

`func (o *AccessCriteria) GetConflictingItems() []Conflictingitem`

GetConflictingItems returns the ConflictingItems field if non-nil, zero value otherwise.

### GetConflictingItemsOk

`func (o *AccessCriteria) GetConflictingItemsOk() (*[]Conflictingitem, bool)`

GetConflictingItemsOk returns a tuple with the ConflictingItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConflictingItems

`func (o *AccessCriteria) SetConflictingItems(v []Conflictingitem)`

SetConflictingItems sets ConflictingItems field to given value.



