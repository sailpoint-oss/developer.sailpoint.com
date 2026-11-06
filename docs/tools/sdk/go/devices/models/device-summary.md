# DeviceSummary

# DeviceSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalEndpoints** | Pointer to **int64** | The total number of devices in the tenant. | [optional] 
**ByOs** | Pointer to [**DeviceOSCounts**](device-os-counts) |  | [optional] 
**AvgAgentsPerEndpoint** | Pointer to **float64** | The average number of agents per device, rounded to one decimal place. | [optional] 
**EndpointsWithoutRecentData** | Pointer to **int64** | The number of devices for which the source has sent no endpoint data or resource link in the last three days. | [optional] 
**EndpointsWithActiveAgents** | Pointer to **int64** | The number of devices linked to at least one existing agent. | [optional] 

## Methods

### NewDeviceSummary

`func NewDeviceSummary() *DeviceSummary`

NewDeviceSummary instantiates a new DeviceSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeviceSummaryWithDefaults

`func NewDeviceSummaryWithDefaults() *DeviceSummary`

NewDeviceSummaryWithDefaults instantiates a new DeviceSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalEndpoints

`func (o *DeviceSummary) GetTotalEndpoints() int64`

GetTotalEndpoints returns the TotalEndpoints field if non-nil, zero value otherwise.

### GetTotalEndpointsOk

`func (o *DeviceSummary) GetTotalEndpointsOk() (*int64, bool)`

GetTotalEndpointsOk returns a tuple with the TotalEndpoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalEndpoints

`func (o *DeviceSummary) SetTotalEndpoints(v int64)`

SetTotalEndpoints sets TotalEndpoints field to given value.

### HasTotalEndpoints

`func (o *DeviceSummary) HasTotalEndpoints() bool`

HasTotalEndpoints returns a boolean if a field has been set.

### GetByOs

`func (o *DeviceSummary) GetByOs() DeviceOSCounts`

GetByOs returns the ByOs field if non-nil, zero value otherwise.

### GetByOsOk

`func (o *DeviceSummary) GetByOsOk() (*DeviceOSCounts, bool)`

GetByOsOk returns a tuple with the ByOs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetByOs

`func (o *DeviceSummary) SetByOs(v DeviceOSCounts)`

SetByOs sets ByOs field to given value.

### HasByOs

`func (o *DeviceSummary) HasByOs() bool`

HasByOs returns a boolean if a field has been set.

### GetAvgAgentsPerEndpoint

`func (o *DeviceSummary) GetAvgAgentsPerEndpoint() float64`

GetAvgAgentsPerEndpoint returns the AvgAgentsPerEndpoint field if non-nil, zero value otherwise.

### GetAvgAgentsPerEndpointOk

`func (o *DeviceSummary) GetAvgAgentsPerEndpointOk() (*float64, bool)`

GetAvgAgentsPerEndpointOk returns a tuple with the AvgAgentsPerEndpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvgAgentsPerEndpoint

`func (o *DeviceSummary) SetAvgAgentsPerEndpoint(v float64)`

SetAvgAgentsPerEndpoint sets AvgAgentsPerEndpoint field to given value.

### HasAvgAgentsPerEndpoint

`func (o *DeviceSummary) HasAvgAgentsPerEndpoint() bool`

HasAvgAgentsPerEndpoint returns a boolean if a field has been set.

### GetEndpointsWithoutRecentData

`func (o *DeviceSummary) GetEndpointsWithoutRecentData() int64`

GetEndpointsWithoutRecentData returns the EndpointsWithoutRecentData field if non-nil, zero value otherwise.

### GetEndpointsWithoutRecentDataOk

`func (o *DeviceSummary) GetEndpointsWithoutRecentDataOk() (*int64, bool)`

GetEndpointsWithoutRecentDataOk returns a tuple with the EndpointsWithoutRecentData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointsWithoutRecentData

`func (o *DeviceSummary) SetEndpointsWithoutRecentData(v int64)`

SetEndpointsWithoutRecentData sets EndpointsWithoutRecentData field to given value.

### HasEndpointsWithoutRecentData

`func (o *DeviceSummary) HasEndpointsWithoutRecentData() bool`

HasEndpointsWithoutRecentData returns a boolean if a field has been set.

### GetEndpointsWithActiveAgents

`func (o *DeviceSummary) GetEndpointsWithActiveAgents() int64`

GetEndpointsWithActiveAgents returns the EndpointsWithActiveAgents field if non-nil, zero value otherwise.

### GetEndpointsWithActiveAgentsOk

`func (o *DeviceSummary) GetEndpointsWithActiveAgentsOk() (*int64, bool)`

GetEndpointsWithActiveAgentsOk returns a tuple with the EndpointsWithActiveAgents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointsWithActiveAgents

`func (o *DeviceSummary) SetEndpointsWithActiveAgents(v int64)`

SetEndpointsWithActiveAgents sets EndpointsWithActiveAgents field to given value.

### HasEndpointsWithActiveAgents

`func (o *DeviceSummary) HasEndpointsWithActiveAgents() bool`

HasEndpointsWithActiveAgents returns a boolean if a field has been set.


