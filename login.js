/**
 * Created by gtakoni on 07/09/2015.
 */


$(document).ready(function(){

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (100000 - 100 + 1)) + 100;
    }

    /* --------------------- login ------------------*/

    setTimeout(function(){
        $('#login').removeClass('before-show');
    },100);

    $('#show-reset-password').on('click',function(){
        $('#forms-wrapper').removeClass('login').addClass('reset-password');
    });

    $('.show-login').on('click',function(){
        $('#forms-wrapper').removeClass('reset-password').removeClass('signup').addClass('login');
    });

    var inputsManager = (function(){

        var $this,
            id,
            isDirty,
            inputsMap={};


            return {
                setIsDirty : function(){
                    $this = $(this);
                    isDirty = $this.val() != '';
                    id = $this[0]['id'];

                    if(id==''){
                        id='id_'+getRandomInt();
                    }

                    if(typeof inputsMap[id] == 'undefined'){
                        $this.attr('id',id);
                        inputsMap[id] = {};
                        inputsMap[id]['parent'] = $this.closest('.input-wrapper');
                        inputsMap[id]['input'] = $this;
                    }

                    inputsMap[id].parent.toggleClass('dirty',isDirty);
                },
                reset:function (){
                    var key;
                    for(key in inputsMap){
                        inputsMap[key].input.val('').trigger('change');
                    }
                }
            };

    })();

    $('input').on('keyup keydown input change',inputsManager.setIsDirty);

    /* --------------------- end login ------------------*/

    /* --------------------- menu ------------------*/

    (function(){

        var $body;

        $body = $('body');
        var $menuWrapper = $('nav.links');

        var lastPageYOffset = 0;

        function onPageScroll(){
            $body.toggleClass('sticky',window.pageYOffset>42);

            // cancel in small screen
            $menuWrapper.toggleClass('hide',window.pageYOffset > lastPageYOffset);
            lastPageYOffset = window.pageYOffset;
        }

        $(document).on('scroll',onPageScroll);

        $('#open-mobile-menu-btn').on('click',function(){
            $body.toggleClass('menu-open');
        });

        //$('#open-search-btn').on('click',function(){
        //    $body.addClass('search-open');
        //});

        //$('#close-btn').on('click',function(){
        //    $body.removeClass('search-open');
        //});

        $('#open-login-modal').on('click',function(){
            $body.addClass('open-modal').addClass('login-modal');
        });


        $('#back-to-top').on('click',function(){
            $body.animate({scrollTop:0}, '500', 'swing', function() {
            });
        });
        $('#modal').on('click',function(e){
            if($(e.target).hasClass('close-modal-area')){
                $body.removeClass('open-modal').removeClass('login-modal');
            }
        });

        $('li.has-sub-menu').on('click',function(){
            $(this).toggleClass('open');
        });

        //$('.open-sign-up-newsletter-box-btn').on('click',function(e){
        //    var toOpen = !$(this).hasClass('open') ||
        //                 ($(this).hasClass('open') && $(e.target).closest('.close-btn').length ==0);
        //    $(this).toggleClass('open',toOpen);
        //});

    })();

    /* --------------------- end menu ------------------*/

});