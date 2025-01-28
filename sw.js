importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"c770b25b3ef3d1f6460f08401427d4ee","url":"contributors.html"},{"revision":"1bfbaa3f6455c8bf9521cf9fc8ac193c","url":"feedback.html"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/aim.001.png"},{"revision":"6b4333aa6bb3f52f2ad67e68f65bce89","url":"images/aim.002.png"},{"revision":"8b00df6514c620097063f68cab39b68d","url":"images/fig1.jpg"},{"revision":"43c202a4b7728efb1b6bd153ab160e37","url":"images/fig2.jpg"},{"revision":"a5716c887c7c5e51b933b621aa508218","url":"images/fig3.jpg"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/procedure.001.png"},{"revision":"987eb600afc6c21b6cbf5b05f6dd4b13","url":"images/procedure.002.png"},{"revision":"ef2628e68c566c9aa5f3e9fc122c194f","url":"images/procedure.003.png"},{"revision":"edc70f282507e0bb5d7a02b2a343407b","url":"images/procedure.004.png"},{"revision":"82b84d4a9e6b475e2ac135f4e8711873","url":"images/procedure.005.png"},{"revision":"dee68323a30c267d2474b53ae6285593","url":"images/procedure.006.png"},{"revision":"181d697d784e8a3d86954dbebfd1015b","url":"images/procedure.007.png"},{"revision":"b781c019b0cf3610edc4be7affed65ae","url":"images/procedure.008.png"},{"revision":"9fd1ba7b2b821681972a8f69af1eda87","url":"images/procedure.009.png"},{"revision":"be08dbf0e412ff3c26ea8eca9f411c28","url":"images/procedure.010.png"},{"revision":"84dd21821f72120b426df6aaaa67ee32","url":"images/procedure.011.png"},{"revision":"a07669cb58dd5741d74fc21a027551b5","url":"images/procedure.012.png"},{"revision":"7e5579803ca5b764ea9387220320d88c","url":"images/procedure.013.png"},{"revision":"bc774de435a3cbdced780fb33dbda032","url":"images/procedure.014.png"},{"revision":"48324384e0538896d73af471b791a6cd","url":"images/procedure.015.png"},{"revision":"788881a665ec6ab58034bdb95462761c","url":"images/procedure.016.png"},{"revision":"cc07d663d2a6c063707925063e7df5d7","url":"images/procedure.017.png"},{"revision":"cdabb736d7fccd9e9c49f4b30a8eb1e9","url":"images/procedure.018.png"},{"revision":"64fdc19dc8de42ca19c9baae8dbcd5ed","url":"images/procedure.019.png"},{"revision":"604059ac4ec537bf47e70fff785feced","url":"images/procedure.020.png"},{"revision":"c93c2d202a099eaaf3b2587756f55eeb","url":"images/procedure.021.png"},{"revision":"2e00ae24d5dd44d9a1a70b86790c4f8d","url":"images/procedure.022.png"},{"revision":"65fd36bbbb6ef4bea3d181fe19414da8","url":"images/procedure.023.png"},{"revision":"7369b99fbc4e6974f1300acb28e042af","url":"images/procedure.024.png"},{"revision":"08812f7f6a121d29f8d7aee4bf7ef4d2","url":"images/procedure.025.png"},{"revision":"9a4514e7e56706ef351d9907cebe7289","url":"images/procedure.026.png"},{"revision":"6ba0d283ece2339433d0eb6088130804","url":"images/procedure.027.png"},{"revision":"19f2d691c5f67e02e6be3ee3a2e6e239","url":"images/procedure.028.png"},{"revision":"8e4f9970196a36e54051369b8fa5bf5c","url":"images/procedure.029.png"},{"revision":"42a76b5cc4b6a248456051f9894e22d9","url":"images/procedure.030.png"},{"revision":"92524bcb71589f0f2c0056c1b3110625","url":"images/procedure.031.png"},{"revision":"6442d1aecc500bac5d114c59a0545a58","url":"images/procedure.032.png"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/references.001.png"},{"revision":"6700860fa71cfd05c8feb37eecc1d7ba","url":"images/step1.png"},{"revision":"5b8c731508a35380d617f08f92d8f720","url":"images/step10.png"},{"revision":"4daf4467e012135c86e48b5b020b7d0c","url":"images/step2.png"},{"revision":"dec68a10736152be8016db1233962ce5","url":"images/step3.png"},{"revision":"183af7dddeedc742257a70c7b558363a","url":"images/step4.png"},{"revision":"ece4ee23a20f80ba246e255b365968c8","url":"images/step5.png"},{"revision":"3d8a085ea16b83380af35c18870315d1","url":"images/step6.png"},{"revision":"e6862cf224a009a5274e987460162ff8","url":"images/step7.png"},{"revision":"5432a8aa785b3484459955329279c614","url":"images/step8.png"},{"revision":"9934b77efec82a1de99c36b41f765aa9","url":"images/step9.png"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/theory.001.png"},{"revision":"4da33e5bb62effe5fb3b535229d8e5ca","url":"images/theory.002.png"},{"revision":"a8545afaa3ddf49a287d7b9a90c178c2","url":"images/theory.003.png"},{"revision":"ccf2f627b521e786e45df0a4ed12c0fc","url":"index.html"},{"revision":"835b0a0450938a794c8e782877104b42","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"e27ff1a3ba0043d3ca70ed88de6c27b2","url":"posttest.html"},{"revision":"bb29bb75856387712765b04cd67df5ff","url":"posttest.json"},{"revision":"4421c88900f4244b603a16f2e8790858","url":"pretest.html"},{"revision":"9ebf66beeee3ad4a7656dc23cbc63534","url":"pretest.json"},{"revision":"9c41fc2b6d37489665d82446d5e755cc","url":"procedure.html"},{"revision":"1d02b68529228cce779f14c96c409ed8","url":"references.html"},{"revision":"272912e56b10b11534310e329da4f9d8","url":"simulation.html"},{"revision":"199bda46ae46ec95f5ab4391e7ec3a64","url":"simulation/common_libraries/css/style.css"},{"revision":"39445a9b72b8cd276fcd7a0e85f14b05","url":"simulation/common_libraries/js/ts_components/collapse_step.js"},{"revision":"f14f7f2e8038186a9bcd65961f911b29","url":"simulation/common_libraries/js/ts_components/geometry.js"},{"revision":"78930881cdb527fa7e809f14d6ae2ede","url":"simulation/common_libraries/js/ts_components/matrix.js"},{"revision":"4535ea022f115cef58492aa71ab62cc1","url":"simulation/common_libraries/js/ts_components/pannel.js"},{"revision":"9230278de718c3e2a5d9f2f87390de5c","url":"simulation/common_libraries/js/ts_components/questions.js"},{"revision":"1e29160b9e25358aa129e2ba76c57f3f","url":"simulation/common_libraries/js/ts_components/scene.js"},{"revision":"20967a9be8a62c5c9d1c3e8d7e330f8d","url":"simulation/common_libraries/js/ts_components/tables.js"},{"revision":"e3aee782fc14a2310cdffd083fdfce8f","url":"simulation/common_libraries/js/ts_math_library/general_math_functions.js"},{"revision":"75c1b6ecc7b07770bdc2e4692bb4d941","url":"simulation/common_libraries/js/ts_math_library/regression.js"},{"revision":"7e49bc276244b7d39353a6a67114b541","url":"simulation/common_libraries/math.ob.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"3d939e2ce8ee90f7afbc5d15bfa3c22f","url":"simulation/images/distribution.png"},{"revision":"e35247871b99662501c41171de715bc7","url":"simulation/index.html"},{"revision":"98915009f7d12949c902eb35857e2343","url":"simulation/js/activity1.js"},{"revision":"cedec47fd0b571a558da185ed5ed90ae","url":"simulation/js/activity2.js"},{"revision":"dea0529683723bca21c8e102d6e3de5d","url":"simulation/js/activity3.js"},{"revision":"73120c201c43df811bef7f41ab85fb95","url":"simulation/js/data.js"},{"revision":"886cf15e7ff833ac493936793b845b50","url":"simulation/js/euler.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"2949a0a675e0e2a3c0623669d658936e","url":"simulation/js/screen_size.js"},{"revision":"9c5eec8a0c4d44b8f12212218ca6d690","url":"theory.html"},{"revision":"a087b15b529f27354a9c447936caecbe","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );