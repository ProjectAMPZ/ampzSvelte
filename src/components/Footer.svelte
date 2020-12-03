<svelte:head>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="ampz/js/jquery.min.js"></script> 
  <script type="text/javascript" src="ampz/plugins/slick/slick.min.js"></script>   
  <script type="text/javascript" src="ampz/plugins/slick/slick-options.js"></script>  
</svelte:head>
<footer>
    <div class="footer">
        <div class="footer-content">
            <div class="col">
                <p class="title">Company</p>
                <p><a href="/about-ampz">About Us</a></p>
                <p><a href="/about-ampz#team">Team</a></p>
                <p><a href="#careers" data-toggle="modal" data-target="#careers">Careers</a></p>
                <p><a href="/product#talent">Talent Portfolio</a></p>
            </div>
            <div class="col">
                <p class="title">Products</p>
                <p><a href="/product#services" >Platforms and Services</a></p>
                <p><a href="/product#programme" >Programs</a></p>               
            </div>
            <div class="col">
                <p class="title">Legal</p>
                <p><a href="/terms" >Terms and Conditions</a></p>
            </div>
            <div class="col">
                <p class="title">Contact</p>
                <p>
                    <a href="https://twitter.com/ampz_tv" target="_blank" ><img src="img/twitter.png" alt=""></a>
                    <a href="https://www.linkedin.com/company/ampz-tv/" target="_blank"><img src="img/linkedin.png" alt=""></a>
                    <a href="https://web.facebook.com/ampz.tv/" target="_blank"><img src="img/facebook.png" alt=""></a>
                    <a href="https://www.instagram.com/ampz.tv/" target="_blank"><img src="img/instagram.png" alt=""></a>
                </p>
                <p><a href="mailto:info@ampz.tv">info@ampz.tv</a></p>              
            </div>
        </div> 
         <p class="mycopyright">&copy; Copyright AMPZ.TV Limited 2019</p>        
    </div>    
</footer>
 <!-- request1 form -->
<div class="modal fade" id="careers" tabindex="-1" role="dialog" aria-labelledby="careersTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="careersTitle">AMPZ Careers</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <form action="">            
            <div class="row shift1">
              <div class="col-md-12">
                <p>AMPZ is a Nigerian start-up leveraging on technology to revolutionize the sports ecosystem in Africa. We are currently on a mission to power the dreams of African sports talents by connecting them to a world of opportunities and we can’t achieve this without you.<br/><br/>If you’re up for your next challenge, you can join our team of champs in breaking barriers by completing the short form below! </p> <br/>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <input type="text" placeholder="First Name">
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <input type="text" placeholder="Last Name">
              </div>
            </div>             
            <div class="row">
              <div class="col-md-12">
                <input type="email" placeholder="Email">
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <input type="text" placeholder="Phone Number eg (2347037382546)">
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <textarea name="" id="" cols="30" rows="10" placeholder="Briefly tell us about yourself ">
                </textarea>
              </div>
            </div> 
            <div class="row shift1">
              <div class="col-md-12">
                Which position are you interested in?  <br/>
                <input type="checkbox" name="" id="" class="shift2"> Front-End Engineer <br/>
                <input type="checkbox" name="" id=""> Business Development Analyst<br/>
                <input type="checkbox" name="" id=""> Operations Analyst<br/>                
              </div>
            </div> 
            <div class="row">
              <div class="col-md-12">
                <textarea name="" id="" cols="30" rows="10" placeholder="What makes you best for the position?">
                </textarea>
              </div>
            </div> 
            <div class="row shift1">
              <div class="col-md-12">
                Upload your resume (Doc or PDF only) *
                <input type="file" name="" id="">
              </div>
            </div>
            <div class="row shift1">
              <div class="col-md-12">
                Residential location *  <br/>
                <input type="radio" name="" id="" class="shift2"> Lagos Island (Ajah, Lekki, Victoria Island)<br/>
                <input type="radio" name="" id=""> Lagos Midland (Obalende, Yaba, Surulere, Anthony)<br/>
                <input type="radio" name="" id=""> Lagos Midland (Obalende, Yaba, Surulere, Anthony)                
              </div>
            </div>      
          </form>          
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Request</button>
      </div>
    </div>
  </div>
</div>
