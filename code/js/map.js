let map = null;
let markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -35.2809, lng: 149.1300},
    zoom: 12,
    disableDefaultUI: true
  });

  updateMarkers(data);
}

function updateMarkers(markerData) {
  markers.forEach(function(marker) {
    marker.setMap(null);
  });
  markers = [];

  let bounds = new google.maps.LatLngBounds();
  let marker = null;
  markerData.forEach(function(item) {
    marker = new google.maps.Marker({
      position: {
        lat: item.lat,
        lng: item.lon
      },
      map: map
    });
    bounds.extend(marker.getPosition());
    markers.push(marker);
  });
 // map.fitBounds(bounds);
}

function filterData(category, subCategory) {
  if (typeof category === 'undefined') {
    category = null;
  }
  if (typeof subCategory === 'undefined') {
    subCategory = null;
  }
  const filteredData = data.filter(function(item) {
    if (category !== null) {
      if (subCategory !== null) {
        return (item.category === category && item.sub_category === subCategory);
      }
      else {
        return (item.category === category);
      }
    }
    return true;
  });
  updateMarkers(filteredData);
}

const data = [
  {
    "id": 5,
    "registered_provider_name": "Barnardos Australia Downer",
    "head_office_location": "Downer",
    "phone_number": "(02) 6228 9500",
    "website": "www.barnardos.org.au",
    "email_address": "akegerton@barnardos.org.au",
    "head_office_address": "2 Atherton Street, Downer ACT 2602",
    "lon": 149.1422129,
    "lat": -35.2439582,
    "category": "",
    "sub_category": ""
  },
  {
    "id": 8,
    "registered_provider_name": "Community Options Inc",
    "head_office_location": "Griffith",
    "phone_number": "(02) 6295 8800",
    "website": "www.communityoptions.com.au",
    "email_address": "admin@communityoptions.com.au",
    "head_office_address": "1 Franklin St, Griffith ACT 2603",
    "lon": 149.134602,
    "lat": -35.3202247,
    "category": "",
    "sub_category": ""
  },
  {
    "id": 13,
    "registered_provider_name": "Focus Act Incorporated",
    "head_office_location": "Deakin",
    "phone_number": "(02) 6282 9422",
    "website": "www.focusact.org/",
    "email_address": "focus@focusact.org",
    "head_office_address": "32 Thesiger Court, Deakin, ACT 2600",
    "lon": 149.0961936,
    "lat": -35.3166588,
    "category": "",
    "sub_category": ""
  },
  {
    "id": 16,
    "registered_provider_name": "Havelock Housing",
    "head_office_location": "Turner",
    "phone_number": "(02) 6257 2277",
    "website": "www.havelock.asn.au",
    "email_address": "info@havelock.asn.au",
    "head_office_address": "85 Northbourne Avenue, Turner, ACT 2612",
    "lon": 149.1291773,
    "lat": -35.2735334,
    "category": "",
    "sub_category": ""
  },
  {
    "id": 17,
    "registered_provider_name": "House With No Steps - Act",
    "head_office_location": "Belconnen",
    "phone_number": "(02) 9451 1511",
    "website": "www.hwns.com.au",
    "email_address": "csact@hwns.com.au",
    "head_office_address": "60-62 Oatley Court, Belconnen, ACT 2617",
    "lon": 149.057774,
    "lat": -35.2425761,
    "category": "",
    "sub_category": ""
  },
  {
    "id": 24,
    "registered_provider_name": "Mac Healthcare Services Pty. Ltd.",
    "head_office_location": "Nicholls",
    "phone_number": "1300 526 877",
    "website": "www.machealthcare.com.au",
    "email_address": "machealth@hotmail.com",
    "head_office_address": "36 Rosella Street, Nicholls, ACT 2913",
    "lon": 149.1143784,
    "lat": -35.1883264,
    "category": "",
    "sub_category": ""
  },
  {
    "id": 25,
    "registered_provider_name": "Mental Health Foundation (Act)",
    "head_office_location": "Chifley",
    "phone_number": "(02) 6282 6604",
    "website": "www.mhf.org.au",
    "email_address": "angie.ingram@mhf.org.au",
    "head_office_address": "11/70 Maclaurin Cres, Chifley, ACT 2606",
    "lon": 149.078303,
    "lat": -35.3529984,
    "category": "",
    "sub_category": ""
  },
  {
    "id": 29,
    "registered_provider_name": "Society Of St. Vincent De Paul Pty. Limi",
    "head_office_location": "Deakin",
    "phone_number": "(02) 6282 2722",
    "website": "www.vinnies.org.au",
    "email_address": "paul.trezise@svdp-cg.org.au",
    "head_office_address": "15 Denison Street, Deakin, ACT 2600",
    "lon": 149.096925,
    "lat": -35.315661,
    "category": "",
    "sub_category": ""
  }
];