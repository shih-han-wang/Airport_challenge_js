describe('Airport', function() {

  var airport;

  beforeEach(function() {
   airport = new Airport();
   plane = new Plane();
   });

   describe('has the plane after landing', function() {
     it('has the plane', function() {
       airport.land(plane, 'sunny')
       expect(airport.hangar).toContain(plane);
     });
   });

   describe('does not hava the plane after taking off', function() {
     it('has no plane', function() {
       airport.take_off(plane, 'sunny')
       expect(airport.hangar).not.toContain(plane);
     });
   });

   describe('when stormy, plane is not allowed to', function() {
     it('land', function() {
      var airport = function(){
        airport = new Airport()
        airport.land(plane, 'stormy')
      }
       expect(airport).toThrowError('Plane is not allowed to land when stormy');
     });

     it('take off', function() {
      var airport = function(){
        airport = new Airport()
        airport.take_off(plane, 'stormy')
      }
       expect(airport).toThrowError('Plane is not allowed to take off when stormy');
     });

   });



  });
